import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWouD5rsE98RpvEs7yrrNsgGbUjHOPdVc",
    authDomain: "mlprojectwebapp.firebaseapp.com",
    projectId: "mlprojectwebapp",
    storageBucket: "mlprojectwebapp.appspot.com",
    messagingSenderId: "412355075237",
    appId: "1:412355075237:web:ef7d39b411bdc7841f014c"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)