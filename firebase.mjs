 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
 
 
   // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBNiKSc1mCJZO8Q3-farvkJcj-W6-OfEAs",
   authDomain: "next-web-8b80b.firebaseapp.com",
   projectId: "next-web-8b80b",
   storageBucket: "next-web-8b80b.appspot.com",
   messagingSenderId: "128241689946",
   appId: "1:128241689946:web:ea32798a6143d7c3b53f63",
   measurementId: "G-T7JFJJTL5B"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export  const analytics = getAnalytics(app);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
 export const storage = getStorage(app);

