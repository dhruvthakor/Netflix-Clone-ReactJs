import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCTJFA8LSC9-ceMm6fp0sNhTtXPuBb-vJw",
    authDomain: "netflix-clone-ba7da.firebaseapp.com",
    projectId: "netflix-clone-ba7da",
    storageBucket: "netflix-clone-ba7da.appspot.com",
    messagingSenderId: "881505226842",
    appId: "1:881505226842:web:eb253cd7dac4df59a88863"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;