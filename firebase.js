import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyApHjECUPyS1g_4muHt7M9sLYueBIywvi4",
   authDomain: "chalk-c68a3.firebaseapp.com ",
   databaseURL: "https://chalk-c68a3.firebaseio.com ",
   storageBucket: "",
   messagingSenderId: "1010088990833"
 };

 export const firebaseApp = firebase.initializeApp(firebaseConfig);
