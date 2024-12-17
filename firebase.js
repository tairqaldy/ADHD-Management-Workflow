import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyCQ0yTAQyGQ6JTx1JQ8cu6vM9l0t0PbY-Y",
    authDomain: "life-managament-workflow.firebaseapp.com",
    databaseURL: "https://life-managament-workflow-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "life-managament-workflow",
    storageBucket: "life-managament-workflow.firebasestorage.app",
    messagingSenderId: "669467187572",
    appId: "1:669467187572:web:e9d7c80c71f2f1c9fc3421",
    measurementId: "G-Y7SPWGCSY4"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };