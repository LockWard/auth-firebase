import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDcin8OnNkKFOewT7kcgAXqASHRXAg8PeQ",
    authDomain: "nemovies.firebaseapp.com",
    databaseURL: "https://nemovies.firebaseio.com",
    projectId: "nemovies",
    storageBucket: "nemovies.appspot.com",
    messagingSenderId: "648095490001",
    appId: "1:648095490001:web:59cf3f8dad7d8ebf4acaf0",
    measurementId: "G-0Y3NJTX8KP"
};

const fire = firebase.initializeApp(config);
export default fire;