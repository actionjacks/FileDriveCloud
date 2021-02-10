import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC0QPYY9ROXaQOGQNxRKtR2wNyqPrtQekc",
  authDomain: "my-drive-cloud-33b6c.firebaseapp.com",
  projectId: "my-drive-cloud-33b6c",
  storageBucket: "my-drive-cloud-33b6c.appspot.com",
  messagingSenderId: "332511812374",
  appId: "1:332511812374:web:47b0acb3757dbe316c0e37",
  measurementId: "G-VZLV8ZF22T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
