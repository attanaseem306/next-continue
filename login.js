import{app,analytics,auth} from "./firebase.mjs"
import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";



document.getElementById("btn").addEventListener('click',()=>{
 
    let email=document.getElementById("Email1").value
    let password=document.getElementById("password1").value

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    }) 
     .then(()=>{
      Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          text: 'You Login successfully!',
      })
    })
    .then(()=>{
        setTimeout(() => {
            window.location.href="./index.html"
        }, 3000);
       
    })

    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'SignUp First',
            text: ' Login Failed',
        })

      const errorCode = error.code;
      const errorMessage = error.message;
    })

   

})

