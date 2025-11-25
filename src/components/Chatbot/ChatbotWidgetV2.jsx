import React, { useState, useEffect, useRef } from 'react';
import { SendBirdProvider, Channel, useSendbirdStateContext } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { FaTimes, FaRedo } from 'react-icons/fa';
import SENDBIRD_CONFIG from '../../config/sendbird';
import { getUpstageResponse } from '../../services/upstage';
import { sendBotMessage, joinBot } from '../../services/sendbirdBot';
import './ChatbotWidget.css';

// Custom component to handle channel logic and AI integration
const ChatInterface = ({ userId, onClose }) => {
  const { stores } = useSendbirdStateContext();
  const sdk = stores.sdkStore.sdk;
  const [channelUrl, setChannelUrl] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const [error, setError] = useState(null);

  const channelInitRef = useRef(false);

  useEffect(() => {
    const initChannel = async () => {
      if (channelInitRef.current) return; // Prevent double init
      console.log('[Chatbot] Initializing Channel Logic (V4-Stable)...');
      
      if (!sdk || !sdk.groupChannel) return;

      try {
        channelInitRef.current = true; // Mark as initialized
        
        // Create a 1-on-1 channel with the bot
        const params = {
          invitedUserIds: [SENDBIRD_CONFIG.botId],
          name: "Assistant",
          isDistinct: true,
          isPublic: false,
          isEphemeral: false,
        };

        const channel = await sdk.groupChannel.createChannel(params);
        setChannelUrl(channel.url);
        console.log('[Chatbot] Channel ready:', channel.url);
        
        // Check if bot is already a member
        const isBotMember = channel.members.some(member => member.userId === SENDBIRD_CONFIG.botId);
        
        if (!isBotMember) {
          console.log('[Chatbot] Bot is not a member. Ensuring invitation...');
          try {
            await channel.inviteWithUserIds([SENDBIRD_CONFIG.botId]);
            console.log('[Chatbot] Bot invited successfully.');
          } catch (inviteError) {
            console.warn('[Chatbot] Invite attempt warning (safe to ignore if already invited):', inviteError.message);
          }
          
          console.log('[Chatbot] Attempting to join bot...');
          await joinBot(channel.url);
        } else {
          console.log('[Chatbot] Bot is already a member. Ready to chat.');
        }
      } catch (err) {
        console.error('[Chatbot] Failed to create/init channel:', err);
        setError(err.message);
        channelInitRef.current = false; // Reset on critical error to allow retry
      }
    };

    if (sdk && userId && !channelUrl) {
      initChannel();
    }
  }, [sdk, userId, channelUrl]);

  const processUserMessage = async (text) => {
    // Trigger AI response immediately when user sends a message
    console.group(`[Chatbot] Processing User Message: "${text}"`);
    setIsTyping(true);
    try {
      console.log('[Chatbot] 1. Requesting AI response from Upstage...');
      const aiResponse = await getUpstageResponse(text);
      console.log(`[Chatbot] 2. AI response received:`, aiResponse);
      
      if (channelUrl) {
        console.log('[Chatbot] 3. Sending bot message to Sendbird channel...');
        await sendBotMessage(channelUrl, aiResponse);
        console.log('[Chatbot] 4. Bot message sent successfully.');
      } else {
        console.error('[Chatbot] Error: Channel URL is missing, cannot send bot message.');
      }
    } catch (error) {
      console.error('[Chatbot] CRITICAL Error in AI/Bot flow:', error);
    } finally {
      setIsTyping(false);
      console.groupEnd();
    }
  };

  if (error) {
    return (
      <div className="chatbot-error">
        <p>⚠️ 연결 실패</p>
        <p className="error-detail">{error}</p>
        <p className="error-hint">
          App ID: {SENDBIRD_CONFIG.appId}<br/>
          Bot ID: {SENDBIRD_CONFIG.botId}
        </p>
        <button onClick={() => window.location.reload()}>새로고침</button>
        <button onClick={onClose} style={{marginTop: '10px', background: '#999'}}>닫기</button>
      </div>
    );
  }

  if (!channelUrl) return <div className="chatbot-loading">Loading chat...</div>;

  return (
    <div className="chatbot-channel-view">
      <Channel
        channelUrl={channelUrl}
        onBeforeSendUserMessage={(text) => {
          console.log(`[Chatbot] User input captured via onBeforeSendUserMessage: "${text}"`);
          processUserMessage(text);
          return { message: text };
        }}
        renderChatHeader={() => null} // Completely hide the default header
        disableUserProfile={true}
        isReactionEnabled={false} // Disable reactions to fix warning and simplify UI
        showSearchIcon={false}
      />
      {isTyping && <div className="typing-indicator">AI is typing...</div>}
    </div>
  );
};

const ChatbotWidgetV2 = ({ isOpen, onClose }) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    let storedUserId = localStorage.getItem('chatbot_user_id');
    if (!storedUserId) {
      storedUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('chatbot_user_id', storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  const handleReset = () => {
    const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('chatbot_user_id', newUserId);
    setUserId(newUserId);
  };

  if (!isOpen || !userId) return null;

  const isConfigured = SENDBIRD_CONFIG.appId && 
                        SENDBIRD_CONFIG.appId !== 'YOUR_SENDBIRD_APP_ID';

  return (
    <div className="chatbot-widget">
      <div className="chatbot-header">
        <div className="chatbot-header-left">
          <div className="chatbot-avatar">🤓</div>
          <div className="chatbot-info">
            <h3>{SENDBIRD_CONFIG.botNickname}</h3>
            <span className="chatbot-status">● Online</span>
          </div>
        </div>
        <div className="chatbot-header-actions">
          <button className="chatbot-action-btn" onClick={handleReset} title="Reset Chat">
            <FaRedo />
          </button>
          <button className="chatbot-close-btn" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>
      </div>

      <div className="chatbot-body">
        {isConfigured ? (
          <SendBirdProvider
            key={userId} // Force remount on user reset to prevent "Not a member" error
            appId={SENDBIRD_CONFIG.appId}
            userId={userId}
            nickname={`Visitor`}
            config={{
              groupChannel: {
                enableReactions: false,
                enableMention: false,
                enableOmittedMessage: false,
              },
              groupChannelSettings: {
                enableMessageSearch: false,
              }
            }}
          >
            <ChatInterface userId={userId} onClose={onClose} />
          </SendBirdProvider>
        ) : (
          <div className="chatbot-setup-message">
            <div className="setup-icon">⚙️</div>
            <h4>Chatbot Setup Required</h4>
            <p>Please configure your keys in <code>.env</code>:</p>
            <ol>
              <li><code>VITE_SENDBIRD_APP_ID</code></li>
              <li><code>VITE_UPSTAGE_API_KEY</code></li>
              <li><code>VITE_SENDBIRD_BOT_TOKEN</code></li>
            </ol>
            <p className="setup-note">
              See <code>sendbird_setup_guide.md</code> for details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotWidgetV2;
