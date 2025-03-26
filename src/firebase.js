import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUByEwtWwaJkX5szIQJ9pxE5iKHOoal2I",
    authDomain: "algo-root.firebaseapp.com",
    projectId: "algo-root",
    storageBucket: "algo-root.firebasestorage.app",
    messagingSenderId: "423523578512",
    appId: "1:423523578512:web:bb40908cebff9b2a60de15"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
