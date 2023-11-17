import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDyfNCz5M2dyA-VTiYVFKUzjmPrAWcU1BE",
	authDomain: "event-manager-1420a.firebaseapp.com",
	projectId: "event-manager-1420a",
	storageBucket: "event-manager-1420a.appspot.com",
	messagingSenderId: "1089676198359",
	appId: "1:1089676198359:web:15b8e52bd28a65b3f28b92",
	measurementId: "G-ZKVLMFWX93"
  };
  

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;
