import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const createFireBaseApp = () => {
  if (getApps().length <= 0) {
    const app = initializeApp(firebaseConfig);
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== "undefined") {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ("measurementId" in firebaseConfig) {
        getAnalytics();
      }
    }
    return app;
  } else {
    const app = getApp();
    return app;
  }
};

const getDb = () => {
  const app = createFireBaseApp();
  const db = getDatabase(app);
  return db;
};

export { getDb, createFireBaseApp };

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const db = getDatabase(app);
// const auth = getAuth();

// export { db, auth };
