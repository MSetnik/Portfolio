import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAa0n46N3PhbDP6xpTjftpM6LnX6iido0Y",
  authDomain: "portfolio-dbe68.firebaseapp.com",
  databaseURL: "https://portfolio-dbe68.firebaseio.com",
  projectId: "portfolio-dbe68",
  storageBucket: "portfolio-dbe68.appspot.com",
  messagingSenderId: "915927296347",
  appId: "1:915927296347:web:93d72ef05043eadda3d27e",
  measurementId: "G-19BNGRM5TY"
};

const fire = firebase.initializeApp(config);
firebase.analytics(fire)
export default fire;
