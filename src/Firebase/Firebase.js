import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getFirestore, query, onSnapshot } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBPXPQQmmrNe_YNTGM3-kFafR3_1xUI1hU",
  authDomain: "olx-ebad.firebaseapp.com",
  projectId: "olx-ebad",
  storageBucket: "olx-ebad.appspot.com",
  messagingSenderId: "108166087263",
  appId: "1:108166087263:web:117fc4e7e16cbf004211ea"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();

export { collection, addDoc, db, storage, query, onSnapshot, ref, uploadBytesResumable, getDownloadURL };