// Import Firebase SDK (for Firebase 9 and later modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhJHtbtV8W_5Mvd2v8FQtLm-EtYEY46Ao",
  authDomain: "ankit-portfolio-6d9af.firebaseapp.com",
  projectId: "ankit-portfolio-6d9af",
  storageBucket: "ankit-portfolio-6d9af.firebasestorage.app",
  messagingSenderId: "716242981018",
  appId: "1:716242981018:web:1b49df81c33b275f570f23",
  measurementId: "G-JBDQPMG8FJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Get the contact form and alert elements
const contactForm = document.getElementById("contactForm");
const alertMessage = document.querySelector(".alert");

// Handle form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("emailid").value;
  const message = document.getElementById("msgContent").value;

  // Save the form data to Firebase Realtime Database
  const contactData = {
    name: name,
    email: email,
    message: message,
  };

  // Reference to the 'contacts' node in the database
  const contactRef = ref(database, "contacts");

  // Push data to the database
  push(contactRef, contactData)
    .then(() => {
      // Show the success message
      alertMessage.style.display = "block";

      // Optionally, clear the form fields
      contactForm.reset();

      // Hide the success message after 5 seconds
      setTimeout(() => {
        alertMessage.style.display = "none";
      }, 5000);
    })
    .catch((error) => {
      // Handle errors (e.g., network issues)
      alertMessage.textContent =
        "Error submitting your message. Please try again later.";
      alertMessage.style.display = "block";
      alertMessage.style.backgroundColor = "red";
    });
});
