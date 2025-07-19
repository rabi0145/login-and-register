import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSsCYS_SgPZE7O2qZ5pFvkL9G0lVZaZJg",
  authDomain: "authentication-try-8ee3f.firebaseapp.com",
  projectId: "authentication-try-8ee3f",
  storageBucket: "authentication-try-8ee3f.appspot.com",
  messagingSenderId: "116993332235",
  appId: "1:116993332235:web:5a1433680071e0ce82230e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerSubmit = document.getElementById('registerSubmit');
registerSubmit.addEventListener("click", function(event) {
  event.preventDefault();

  // Get values from the register form
  const registerForm = document.getElementById('registerForm');
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      window.location.href = "index.html"; // Redirect to login page
    })
    .catch((error) => {
      alert("Registration failed: " + error.message);
    });
});