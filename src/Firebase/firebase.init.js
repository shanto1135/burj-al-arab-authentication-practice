import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitialzetion = () => {
    initializeApp(firebaseConfig);
};

export default firebaseInitialzetion;