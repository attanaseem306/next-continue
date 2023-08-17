import { db, storage,auth} from "./firebase.mjs"

import { collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

console.log('fhdgfhsgfsdh');

let id = (localStorage.getItem('id'));







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





const docRef = doc(db, "users", id);
const docSnap = await getDoc(docRef);




if (docSnap.exists()) {

  console.log("Document data:", docSnap.data());



  console.log(doc);

  getDownloadURL(ref(storage, id))
    .then((url) => {



      let link = url;
      let naam = document.getElementById("naam").innerHTML = docSnap.data().Name;
      let picture = document.getElementById("image").src = link;
      let price = docSnap.data().Price;
      localStorage.setItem("price",price)
      localStorage.setItem("tasver",picture)


    // function select1(){

    //   let one=1

     

    //   let plus = one * price;
    //   let tax = plus * .18
    //   let total = plus + tax;

      
    //   let subtotal=document.getElementById("subtotal").innerHTML=`₹`+ Math.round(plus);
    //   let tax1=document.getElementById("tax").innerHTML=`₹` + Math.round(tax);
    //   let Ordertotal=document.getElementById("Ordertotal").innerHTML=`₹` + Math.round(total);
  

    // }
    // select1()

    
    // window.select1=select1

     function select2(){
       let select = document.getElementById('select').value;
       localStorage.setItem("value",select);
       let plus = select * price;
       localStorage.setItem('pl',plus)
       let tax = plus * .18;
       localStorage.setItem('ta',tax)
       let total = plus + tax;
       localStorage.setItem('to',total)

       


       let subtotal=document.getElementById("subtotal").innerHTML=`₹`+ Math.round(plus);
       let tax1=document.getElementById("tax").innerHTML=`₹` + Math.round(tax);
       let Ordertotal=document.getElementById("Ordertotal").innerHTML=`₹` + Math.round(total)

    //    two.innerHTML = `
    //    <div class="main">
    //  <h4 class="sum">Order summary</h4>
    //  <div class="sub"><p class="subtotal">Subtotal</p><p id="subtotal">₹${plus}</p></div>
    //  <div class="ta"><p class="taxt">Tax(18%) </p><p id="tax">₹ ${tax}</p></div>
    //  <div class="or"><h5 class="total">Order total</h5><p id="Ordertotal">₹ ${total}</p></div>
    //  <button id="checkout">Checkout</button>
    //  </div>`
     
    }

    window.select2 = select2

    })

    .catch((error) => {
      // Handle any errors
    })



      function check(){
        console.log(select.value);

        if(select.value == '0'){
          alert('please select your Quantity')
        }else{
          onAuthStateChanged(auth, (user) => {
            if (user) {
              
              console.log("Hello");
              const uid = user.uid;
              console.log(uid);
              window.location.href="./nextcheckout.html"
              
              // ...
            } else {
              // User is signed out
              window.location.href="./login.html"
            }
          })
        }
      }

      window.check=check
    



}



else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}



