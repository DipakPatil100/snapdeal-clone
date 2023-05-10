import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRVifRjaojNuQcJOoaacASARhd3BMmleA",
  authDomain: "snapdeal-clone-70026.firebaseapp.com",
  projectId: "snapdeal-clone-70026",
  storageBucket: "snapdeal-clone-70026.appspot.com",
  messagingSenderId: "172603403341",
  appId: "1:172603403341:web:c9387df7d5d7ea44008004",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
