// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';

import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCck_DmKPlmBzpZwoWZnmpC5F6ieaq65kk',
  authDomain: 'bank-ce7c5.firebaseapp.com',
  projectId: 'bank-ce7c5',
  storageBucket: 'bank-ce7c5.appspot.com',
  messagingSenderId: '181397973927',
  appId: '1:181397973927:web:2f9456086fa951a63fa482',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {useFetchStreams: false} as any);
export default app;
