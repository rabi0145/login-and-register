// Tab toggling
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSsCYS_SgPZE7O2qZ5pFvkL9G0lVZaZJg",
  authDomain: "authentication-try-8ee3f.firebaseapp.com",
  projectId: "authentication-try-8ee3f",
  storageBucket: "authentication-try-8ee3f.appspot.com", // fixed here
  messagingSenderId: "116993332235",
  appId: "1:116993332235:web:5a1433680071e0ce82230e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('loginSubmit');
submit.addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
