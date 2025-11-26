// Firebase Configuration
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, query, orderByChild, limitToLast, onValue, off } from 'firebase/database';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  return firebaseConfig.apiKey && 
         firebaseConfig.databaseURL && 
         firebaseConfig.apiKey !== 'YOUR_API_KEY';
};

// Initialize Firebase only if configured
let app = null;
let database = null;

if (isFirebaseConfigured()) {
  try {
    console.warn('[Firebase] Attempting to initialize...');
    console.warn('[Firebase] Config:', {
      projectId: firebaseConfig.projectId,
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL
    });
    app = initializeApp(firebaseConfig);
    database = getDatabase(app);
    console.log('[Firebase] Successfully initialized app and database');
  } catch (error) {
    console.error('[Firebase] Initialization CRITICAL FAILURE:', error);
  }
} else {
  console.warn('[Firebase] Configuration MISSING or INCOMPLETE. Check .env file.');
  console.log('[Firebase] Current Config State:', firebaseConfig);
}

/**
 * Save a score to Firebase
 * @param {Object} scoreData - { name, score, date }
 * @returns {Promise<boolean>} - true if saved successfully
 */
export const saveScoreToFirebase = async (scoreData) => {
  if (!database) {
    console.log('[Firebase] Not configured, using localStorage only');
    return false;
  }

  try {
    const scoresRef = ref(database, 'snake_scores');
    await push(scoresRef, scoreData);
    console.log('[Firebase] Score saved:', scoreData);
    return true;
  } catch (error) {
    console.error('[Firebase] Failed to save score:', error);
    return false;
  }
};

/**
 * Subscribe to top scores from Firebase
 * @param {Function} callback - Called with array of scores when data changes
 * @returns {Function} - Unsubscribe function
 */
export const subscribeToTopScores = (callback) => {
  if (!database) {
    console.log('[Firebase] Not configured, using localStorage only');
    return () => {}; // Return empty unsubscribe function
  }

  try {
    const scoresRef = ref(database, 'snake_scores');
    const topScoresQuery = query(scoresRef, orderByChild('score'), limitToLast(100));
    
    const handleData = (snapshot) => {
      const scores = [];
      snapshot.forEach((childSnapshot) => {
        scores.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      // Sort by score descending and take top 7
      const topScores = scores
        .sort((a, b) => b.score - a.score)
        .slice(0, 7);
      
      callback(topScores);
    };

    onValue(topScoresQuery, handleData, (error) => {
      console.error('[Firebase] Error loading scores:', error);
      callback([]); // Return empty array on error
    });

    // Return unsubscribe function
    return () => off(topScoresQuery, 'value', handleData);
  } catch (error) {
    console.error('[Firebase] Failed to subscribe:', error);
    return () => {};
  }
};

/**
 * Check if Firebase is available
 * @returns {boolean}
 */
export const isFirebaseAvailable = () => {
  return database !== null;
};

export default database;
