import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";


const initializeAthentication = () => {
  initializeApp(firebaseConfig);
}

export default initializeAthentication;