// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMlSZtD0u3zjJ3Wa42HTJKSAuz_3A29Pg',
  authDomain: 'sowind-eindopdracht.firebaseapp.com',
  projectId: 'sowind-eindopdracht',
  storageBucket: 'sowind-eindopdracht.appspot.com',
  messagingSenderId: '591139385252',
  appId: '1:591139385252:web:b8b204d10c0cd50bc95b31',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
