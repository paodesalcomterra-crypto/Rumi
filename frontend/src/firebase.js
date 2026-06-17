import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKcvU8gjfP-c4dcQ2pkKmzkn7_qumowm0",
  authDomain: "rumi-41c4e.firebaseapp.com",
  projectId: "rumi-41c4e",
  storageBucket: "rumi-41c4e.firebasestorage.app",
  messagingSenderId: "444398827271",
  appId: "1:444398827271:web:a088236748bf70a29ff7a2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider =
  new GoogleAuthProvider();