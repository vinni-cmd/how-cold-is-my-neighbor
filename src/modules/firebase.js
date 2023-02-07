// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt1VSNQqNxfq-zzZGcpR0dTTTUeO4U85s",
  authDomain: "how-cold-is-my-neighbor.firebaseapp.com",
  projectId: "how-cold-is-my-neighbor",
  storageBucket: "how-cold-is-my-neighbor.appspot.com",
  messagingSenderId: "177028912779",
  appId: "1:177028912779:web:c3cff30ed7171f062ca68e"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase; 