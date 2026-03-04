import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyANMtoEgXdhyFfh4FLCVKzX7D21gSyzyG4",
  authDomain: "shourja1technologia.firebaseapp.com",
  projectId: "shourja1technologia",
  storageBucket: "shourja1technologia.firebasestorage.app",
  messagingSenderId: "121900157328",
  appId: "1:121900157328:web:2641848e54443197658b15",
  measurementId: "G-QDB96KMSJC"
};
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign In Helper Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

// Sign Out Helper Function
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};
