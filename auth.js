import { auth, db } from './firebase.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

// Sign Up Function
window.signup = async function signup() {
    const fullName = document.getElementById('signupName').value; // Full Name field
    const email = document.getElementById('signupEmail').value; // Email field
    const password = document.getElementById('signupPassword').value; // Password field

    try {
        // Firebase Authentication: Create User
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional user information in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            fullName: fullName,
            email: email,
            createdAt: new Date()
        });

        alert('Account created successfully!');
        window.location.href = 'main.html'; // Redirect to main page
    } catch (error) {
        console.error('Signup error:', error.message);
        alert(error.message);
    }
};

// Log In Function
window.login = function login() {
    const email = document.getElementById('loginEmail').value; // Email field
    const password = document.getElementById('loginPassword').value; // Password field

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Logged in successfully!');
            window.location.href = 'main.html'; // Redirect to main page
        })
        .catch((error) => {
            console.error('Login error:', error.message);
            alert(error.message);
        });
};

// Log Out Function (Optional)
window.logout = function logout() {
    signOut(auth)
        .then(() => {
            alert('Logged out successfully!');
            window.location.href = 'index.html'; // Redirect to login page
        })
        .catch((error) => {
            console.error('Logout error:', error.message);
            alert(error.message);
        });
};
