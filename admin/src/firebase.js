import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCOyi1sKYBbrLxGlg_lLEFC-vfTe85GVC0',
  authDomain: 'netflix-mern-admin.firebaseapp.com',
  projectId: 'netflix-mern-admin',
  storageBucket: 'netflix-mern-admin.appspot.com',
  messagingSenderId: '387469286277',
  appId: '1:387469286277:web:2e3bb27740c699da0e02ec',
  measurementId: 'G-PZQ1LPE6SK',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
