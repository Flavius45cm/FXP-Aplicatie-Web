// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFLpSgrNkQrPUnPTYFdB70XyBp4MH6HAM",
    authDomain: "fxp-aplicatie-web.firebaseapp.com",
    projectId: "fxp-aplicatie-web",
    storageBucket: "fxp-aplicatie-web.firebasestorage.app",
    messagingSenderId: "795616807072",
    appId: "1:795616807072:web:4c7356693e9283d31ba1c5",
    measurementId: "G-B4T6GCDG9B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Export Firebase services for use in other files
window.db = db;
window.auth = auth;
