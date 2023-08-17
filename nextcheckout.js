import{db,storage, auth} from "./firebase.mjs"

import { collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      let mt = document.getElementById('mt').innerHTML = 
      ` <button id="login" onclick='sign()'> <a class="l" >SignOut</a></button>`;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
   
  function sign(){
    signOut(auth).then(() => {
      alert('SignOut successfully')
    }).catch((error) => {
      // An error happened.
    });
  }
  window.sign = sign

  

let id =(localStorage.getItem('id'));

 
const docRef = doc(db, "users", id);
const docSnap = await getDoc(docRef);


  if (docSnap.exists()) {

    console.log("Document data:", docSnap.data());
  
       
    console.log(doc);
   
    getDownloadURL(ref(storage, id))
      .then((url) => {

        let qunatity= (localStorage.getItem("value"));
        let firstp=(localStorage.getItem('pl'));
        let secondp=(localStorage.getItem('ta'));
        let thirdp=(localStorage.getItem('to'));
        let tas= (localStorage.getItem('tasver'))



        let val=document.querySelector('.qu').innerHTML=`Quantity : ${qunatity}` ;
        console.log(qunatity);
        let cloth=document.getElementById('aaa').innerHTML=docSnap.data().Name;
        let store=docSnap.data().Name;
        let rupess=document.getElementById('subtotal').innerHTML=`₹` + firstp;
        let  katoti=document.getElementById('tax').innerHTML=`₹`+ secondp;
        let  final=document.getElementById('Ordertotal').innerHTML=`₹`+ thirdp;
        let picture=document.getElementById("picture2").src=tas;
       
         localStorage.setItem("nnn",store)

      })
    
      .catch((error) => {
        // Handle any errors
      });
    
  
  
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  

  document.getElementById("bt").addEventListener("click",()=>{

 let Firstname=document.getElementById('Firstname').value;
 let address=document.getElementById('address').value;
 let city=document.getElementById('city').value;
 let state=document.getElementById('state').value;
 let zip=document.getElementById('zip').value;

console.log(zip);

 localStorage.setItem("Firstname",Firstname);
 localStorage.setItem("address",address);
 localStorage.setItem("city",city);
 localStorage.setItem("state",state);
 let ch= localStorage.setItem("zip",zip);


//  console.log(Firstname);
//  console.log(address);
//  console.log(city);
//  console.log(state);
//  console.log(zip);


 if(Firstname=="" || address=="" || city=="" || state=="" || zip ==""){

  Swal.fire({
    icon: 'error',
    title: 'Proceed Failed',
    text: 'Fill all input field',
})

 }
 

 else{
     window.location.href="./last.html"
 }

  })