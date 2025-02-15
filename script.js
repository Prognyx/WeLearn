// Firebase SDKs importieren
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// 🚀 Deine Firebase-Konfiguration (deine echten Daten sind hier schon eingefügt!)
const firebaseConfig = {
    apiKey: "AIzaSyCCdS7e2I3l9YJeAonZ5xY2DFX7X9229A8",
    authDomain: "weleaaaarn.firebaseapp.com",
    projectId: "weleaaaarn",
    storageBucket: "weleaaaarn.appspot.com",
    messagingSenderId: "355710972676",
    appId: "1:355710972676:web:d70b97301dd7bd648fd651",
    measurementId: "G-KKHLG9D88G"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// HTML-Elemente abrufen
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerBtn = document.getElementById("register-btn");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

const logoutBtn = document.getElementById("logout-btn");
const userInfo = document.getElementById("user-info");
const userEmailDisplay = document.getElementById("user-email");

// Registrierung (SignUp)
registerBtn.addEventListener("click", function () {
    const email = registerEmail.value;
    const password = registerPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registrierung erfolgreich!");
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login (SignIn)
loginBtn.addEventListener("click", function () {
    const email = loginEmail.value;
    const password = loginPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login erfolgreich!");
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Logout
logoutBtn.addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            alert("Erfolgreich ausgeloggt!");
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Nutzerstatus überwachen (ist jemand eingeloggt?)
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Nutzer ist eingeloggt
        userEmailDisplay.textContent = `Eingeloggt als: ${user.email}`;
        userInfo.classList.remove("hidden");
        logoutBtn.classList.remove("hidden");
    } else {
        // Kein Nutzer eingeloggt
        userInfo.classList.add("hidden");
        logoutBtn.classList.add("hidden");
    }
});

