 import firebase from 'firebase/app';
 import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBMkP9XmyPrktiQR8kOo5hozqUT9oIEzc0",
    authDomain: "todoist-ad810.firebaseapp.com",
    databaseURL: "https://todoist-ad810.firebaseio.com",
    projectId: "todoist-ad810",
    storageBucket: "todoist-ad810.appspot.com",
    messagingSenderId: "613316509274",
    appId: "1:613316509274:web:be94895bda05e974ffa263"
});

export {firebaseConfig as firebase};