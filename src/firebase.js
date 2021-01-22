import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb1hjHesx-bRLa1Qx_AvD81eXyJCk89AE",
  authDomain: "discord-clone-45e9d.firebaseapp.com",
  projectId: "discord-clone-45e9d",
  storageBucket: "discord-clone-45e9d.appspot.com",
  messagingSenderId: "518525331906",
  appId: "1:518525331906:web:3f554455512e400996ce5b",
  measurementId: "G-6PM4BGNR5J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

