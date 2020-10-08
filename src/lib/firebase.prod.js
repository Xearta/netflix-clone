import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// Seed the database

// Config here
const config = {
  apiKey: 'AIzaSyD4aa2F38XG7OiyVeoOiswct_6rzJ-anco',
  authDomain: 'netflix-f21e9.firebaseapp.com',
  databaseURL: 'https://netflix-f21e9.firebaseio.com',
  projectId: 'netflix-f21e9',
  storageBucket: 'netflix-f21e9.appspot.com',
  messagingSenderId: '135497069141',
  appId: '1:135497069141:web:f9410274bce100afe51adc',
  measurementId: 'G-8H9W8DLNM9',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
