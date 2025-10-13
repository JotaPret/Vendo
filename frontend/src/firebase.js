import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDeV6_65JugN5mECUcqf5G9qwOZ-r0CcI",
  authDomain: "login-1f185.firebaseapp.com",
  projectId: "login-1f185",
  storageBucket: "login-1f185.firebasestorage.app",
  messagingSenderId: "562353286891",
  appId: "1:562353286891:web:6436356e3adb7d16a198ae",
  measurementId: "G-Q8ZP45MGVP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//Provedor Google
const googleProvider = new GoogleAuthProvider();

//Função login popup
async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}

//função para logout
async function logout() {
    await singOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };