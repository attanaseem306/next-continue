import{db,storage, auth} from "./firebase.mjs"

import { collection,  getDocs  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


//////////////////////////////     ////////////////////////////////////////////////////////////////

// console.log("hello vro kia haal he");

////////////////////////////  ye code firestore se value la kr dy ga  ///////////////////////////////////

onAuthStateChanged(auth, (user) => {
  if (user) {
    let ge=user.email;
     
    localStorage.setItem("email",ge)
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
})
 
function sign(){
  signOut(auth).then(() => {
    Swal.fire({
        icon: 'success',
        title: 'LogOut Successfully',
        text: 'You LogOut successfully!',
    })
    window.location.href="./index.html"
  }).catch((error) => {
    // An error happened.
  });
}
window.sign = sign



let gmail=(localStorage.getItem("email"));
let Firstname=(localStorage.getItem("Firstname"))
let address=(localStorage.getItem("address"))
let city=(localStorage.getItem("city"))
let state=(localStorage.getItem("state"))
let zip=(localStorage.getItem("zip"))

document.getElementById('shiping').innerHTML=`Email : ${gmail}` ;
document.getElementById('na').innerHTML=`Name : ${Firstname}` ;
document.getElementById('st').innerHTML=`Street address : ${address}` ;
document.getElementById('ci').innerHTML=`City : ${city}` ;
document.getElementById('sta').innerHTML=`State / Province : ${state}` ;
document.getElementById('zi').innerHTML=`ZIP / Postal code
: ${zip}` ;


let qunatity= (localStorage.getItem("value"));
let firstp=(localStorage.getItem('pl'));
let secondp=(localStorage.getItem('ta'));
let thirdp=(localStorage.getItem('to'));



document.getElementById("subtotal").innerHTML=`₹ ${firstp}`;
document.getElementById("tax").innerHTML=`₹ ${secondp}`;
document.getElementById("Ordertotal").innerHTML=`₹ ${thirdp}`;



let rice=(localStorage.getItem('price'));
let tas= (localStorage.getItem('tasver'));
let nnn=(localStorage.getItem("nnn"));

document.getElementById('nn').innerHTML=nnn
document.getElementById('quan').innerHTML=`Quantity :${qunatity}`;
document.getElementById('pesa').innerHTML=`Price₹ ${rice}`;
document.getElementById('image').src=tas;













