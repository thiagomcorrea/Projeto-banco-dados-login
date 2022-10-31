import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDCW3eTmK9WanKbKWVT2OUZZwDFLpRgVfY",
  authDomain: "curso-813ec.firebaseapp.com",
  projectId: "curso-813ec",
  storageBucket: "curso-813ec.appspot.com",
  messagingSenderId: "391674242165",
  appId: "1:391674242165:web:81df403116c20b4cc7043c",
  measurementId: "G-9QFYX1HPJF"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };