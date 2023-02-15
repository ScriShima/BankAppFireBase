import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCwSx60GDcKJT-9x3seOjxLNUox1OIJ0iY',
  authDomain: 'bankapp-51412.firebaseapp.com',
  projectId: 'bankapp-51412',
  storageBucket: 'bankapp-51412.appspot.com',
  messagingSenderId: '1063092172647',
  appId: '1:1063092172647:web:53b8ce8446a42a140a61c2',
  measurementId: 'G-X0KCYD4G0P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = () => {
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  return signOut(auth);
};
