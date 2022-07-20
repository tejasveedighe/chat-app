import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDQyvh3oYs7aM-CB6WzRQvUsg-N2ucPOic',
  authDomain: 'chat-app-658a6.firebaseapp.com',
  databaseURL:
    'https://chat-app-658a6-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-app-658a6',
  storageBucket: 'chat-app-658a6.appspot.com',
  messagingSenderId: '85461362799',
  appId: '1:85461362799:web:5d99d552190978afcc459a',
  measurementId: 'G-DS8YP1TMGP',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
