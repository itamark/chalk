import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyApHjECUPyS1g_4muHt7M9sLYueBIywvi4",
    authDomain: "chalk-c68a3.firebaseapp.com",
    databaseURL: "https://chalk-c68a3.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "1010088990833"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
