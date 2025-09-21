// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQVBcE4sms9CKfOPSae0sQGu9610LmWRk",
  authDomain: "qawach-472606.firebaseapp.com",
  projectId: "qawach-472606",
  storageBucket: "qawach-472606.firebasestorage.app",
  messagingSenderId: "153552478765",
  appId: "1:153552478765:web:38deac901a53cd5e428ea4",
  measurementId: "G-YT67HCRHVT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth instance
export const auth = getAuth(app);
