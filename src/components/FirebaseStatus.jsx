import React, { useState, useEffect } from 'react';
import { isFirebaseAvailable } from '../config/firebase';

const FirebaseStatus = () => {
  const [status, setStatus] = useState({
    connected: false,
    details: []
  });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const isConnected = isFirebaseAvailable();
      const details = [];

      // Check individual environment variables for debugging
      const requiredVars = [
        'VITE_FIREBASE_API_KEY',
        'VITE_FIREBASE_AUTH_DOMAIN',
        'VITE_FIREBASE_DATABASE_URL',
        'VITE_FIREBASE_PROJECT_ID',
        'VITE_FIREBASE_STORAGE_BUCKET',
        'VITE_FIREBASE_MESSAGING_SENDER_ID',
        'VITE_FIREBASE_APP_ID'
      ];

      requiredVars.forEach(varName => {
        if (!import.meta.env[varName]) {
          details.push(`Missing: ${varName}`);
        }
      });

      if (isConnected) {
        details.push('Firebase initialized successfully');
      } else if (details.length === 0) {
        details.push('Env vars present but initialization failed (check console)');
      }

      setStatus({ connected: isConnected, details });
    };

    checkStatus();
    // Check again after a short delay in case of async init (though firebase init is synchronous usually)
    const timer = setTimeout(checkStatus, 1000);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      zIndex: 9999,
      fontFamily: 'monospace',
      fontSize: '12px',
      backgroundColor: status.connected ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
      border: `1px solid ${status.connected ? '#00cc00' : '#cc0000'}`,
      borderRadius: '4px',
      padding: '8px 12px',
      color: status.connected ? '#00cc00' : '#cc0000',
      cursor: 'pointer',
      backdropFilter: 'blur(4px)',
      maxWidth: '300px',
      transition: 'all 0.3s ease'
    },
    details: {
      marginTop: '8px',
      borderTop: `1px solid ${status.connected ? '#00cc00' : '#cc0000'}`,
      paddingTop: '8px',
      display: isExpanded ? 'block' : 'none'
    }
  };

  // return (
  //   <div style={styles.container} onClick={() => setIsExpanded(!isExpanded)}>
  //     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  //       <div style={{
  //         width: '8px',
  //         height: '8px',
  //         borderRadius: '50%',
  //         backgroundColor: status.connected ? '#00cc00' : '#cc0000',
  //         boxShadow: `0 0 8px ${status.connected ? '#00cc00' : '#cc0000'}`
  //       }} />
  //       <strong>Firebase: {status.connected ? 'Connected' : 'Disconnected'}</strong>
  //     </div>
      
  //     <div style={styles.details}>
  //       {status.details.map((detail, index) => (
  //         <div key={index} style={{ marginBottom: '4px' }}>• {detail}</div>
  //       ))}
  //       <div style={{ marginTop: '8px', fontSize: '10px', opacity: 0.8 }}>
  //         Click to collapse
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default FirebaseStatus;
