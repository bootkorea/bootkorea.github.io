import { content } from '../data/content';
import SENDBIRD_CONFIG from '../config/sendbird';

// Construct System Prompt from Portfolio Data
const generateSystemPrompt = () => {
  const data = content.kr; // Use Korean data for better context in Korean queries
  
  let prompt = `You are an AI Assistant for Bu-Seung So (bootkorea)'s portfolio website.
Your role is to answer questions about Bu-Seung So based on the following information.
Be polite, professional, and concise. If you don't know the answer, say you don't know.
Do not make up information.

--- PORTFOLIO DATA ---

Name: Bu-Seung So (소부승)
Role: Software Engineer & Product Manager
Description: ${data.hero.description}

[Experience]
${data.about.experience.map(exp => `
- ${exp.title} at ${exp.company} (${exp.period})
  ${exp.description.join('\n  ')}
  Tags: ${exp.tags.join(', ')}
`).join('\n')}

[Education]
${data.about.education.map(edu => `
- ${edu.title} (${edu.degree})
  ${edu.period}
  ${edu.description.join('\n  ')}
`).join('\n')}

[Projects]
${data.portfolio.projects.map(proj => `
- ${proj.title} (${proj.category})
  Description: ${proj.description}
  Role: ${proj.details.role}
  Tech Stack: ${proj.details.tech.join(', ')}
  Key Features:
  ${proj.details.features.join('\n  ')}
`).join('\n')}

[Awards]
${data.about.awards.map(award => `
- ${award.title} (${award.issuer}, ${award.date})
  ${award.description.join('\n  ')}
`).join('\n')}

[Certifications]
${data.about.certs.map(cert => `
- ${cert.title} (${cert.issuer}, ${cert.date})
`).join('\n')}

--- END DATA ---

Answer in the language the user asked (Korean or English).
If asked about contact info, suggest checking the footer or contact section.
`;

  return prompt;
};

export const getUpstageResponse = async (userMessage, history = []) => {
  try {
    const apiKey = SENDBIRD_CONFIG.upstageApiKey;
    console.log(`[Upstage] Configuration Check:`);
    console.log(`- API Key: ${apiKey ? `${apiKey.substring(0, 4)}...` : 'MISSING'}`);

    if (!apiKey) {
      throw new Error('Upstage API Key is missing');
    }

    const systemPrompt = generateSystemPrompt();
    
    // Format messages for API
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map(msg => ({
        role: msg.sender.userId === SENDBIRD_CONFIG.botId ? 'assistant' : 'user',
        content: msg.message
      })),
      { role: 'user', content: userMessage }
    ];

    console.log('[Upstage] Sending request to Solar Pro API. Messages payload:');
    console.table(messages);

    const response = await fetch('https://api.upstage.ai/v1/solar/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'solar-pro',
        messages: messages,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('[Upstage] API Error Response:', errorData);
      throw new Error(`Upstage API Error: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log('[Upstage] API Response Data:', data);
    console.log('[Upstage] AI Reply Content:', data.choices[0].message.content);
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling Upstage API:', error);
    return "죄송합니다. 현재 AI 응답을 생성할 수 없습니다. (API Key 설정을 확인해주세요)";
  }
};
