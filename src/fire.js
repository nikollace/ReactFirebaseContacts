import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1H2pTvaAkNuHDxFPKazcGlBZIOggtVRY",
    authDomain: "my-app-66ae5.firebaseapp.com",
    databaseURL: "https://my-app-66ae5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-app-66ae5",
    storageBucket: "my-app-66ae5.appspot.com",
    messagingSenderId: "533649826882",
    appId: "1:533649826882:web:f623b503b0023c053c39db"
  };


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();;