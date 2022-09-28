import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBJ6wrA6bohViEPcsM40WufFKe_1uqukUQ",
  authDomain: "wallet-f71a8.firebaseapp.com",
  databaseURL: "https://wallet-f71a8.firebaseio.com",
  projectId: "wallet-f71a8",
  storageBucket: "wallet-f71a8.appspot.com",
  messagingSenderId: "964819397119",
  appId: "1:964819397119:web:2ee2dfe917631c4b0b9fca",
  measurementId: "G-1SFHDSBWEB",
};

const app = initializeApp(config);

export const auth = getAuth(app);
