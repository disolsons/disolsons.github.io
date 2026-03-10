import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe4WywEYFgcHBK_IhgCOgfSD6IoV2mVE8",
  authDomain: "sowny-guestbook.firebaseapp.com",
  projectId: "sowny-guestbook",
  storageBucket: "sowny-guestbook.firebasestorage.app",
  messagingSenderId: "645327202827",
  appId: "1:645327202827:web:b117f21c249028e7fb750e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);