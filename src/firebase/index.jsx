import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyACB0vpNtJvXVC_9VqaVkzByVDPS9QtiA0",
  authDomain: "ebenezer-89f17.firebaseapp.com",
  projectId: "ebenezer-89f17",
  storageBucket: "ebenezer-89f17.appspot.com",
  messagingSenderId: "533957687199",
  appId: "1:533957687199:web:b4c6ea6f26e66c6f3c6faa",
  measurementId: "G-BYR6D2QW5Z",
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
