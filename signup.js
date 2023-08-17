import{app,analytics,auth} from "./firebase.mjs"
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


document.getElementById("sig").addEventListener('click',()=>{
  let email=document.getElementById("Email").value    
  let password=document.getElementById("password").value    

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
      .then(()=>{
        Swal.fire({
            icon: 'success',
            title: 'SignUp Successfully',
            text: 'You SignUP successfully!',
        })
      })
      .then(()=>{
        window.location.href="./login.html"
      })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'SignUp Failed',
            text: 'Your SignUp Failed!',
        })
        
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})

