import { db, storage,auth} from "./firebase.mjs"

import { collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

console.log('fhdgfhsgfsdh');

let id = (localStorage.getItem('id'));




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
      // console.log(price);
      // let one = document.getElementById('one');
      // let two = document.getElementById('two');
      // console.log(one , two);

    //   one.innerHTML = `
    //  <h2 class="shoping">Shopping Cart</h2>
    //  <div class="d-flex">
    //      <div class="my">
    //          <img class="m" id="image"
    //              src="">

    //      </div>
    //      <div class="set">
    //          <h6 class="hod" id="naam"></h6>
    //          <p class="qq">Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui
    //              finibus malesuada et at nulla...</p>
    //              <select name="select" id="select" onclick='select()'>
    //     <option value="1">1</option>
    //     <option value="2">2</option>
    //     <option value="3">3</option>
    //     <option value="4">4</option>
    //     <option value="5">5</option>
    // </select>
    //      </div>

    //  </div>`
     

    function select1(){

      let one=1

     

      let plus = one * price;
      let tax = plus * .18
      let total = plus + tax;

      
      let subtotal=document.getElementById("subtotal").innerHTML= Math.round(plus);
      let tax1=document.getElementById("tax").innerHTML=Math.round(tax);
      let Ordertotal=document.getElementById("Ordertotal").innerHTML=Math.round(total);
  

    }
    select1()

    
    window.select1=select1

     function select(){
       let select = document.getElementById('select');
       console.log(select);
       let plus = select.value * price;
       let tax = plus * .18;
       let total = plus + tax;
       


       let subtotal=document.getElementById("subtotal").innerHTML=Math.round(plus);
       let tax1=document.getElementById("tax").innerHTML=Math.round(tax);
       let Ordertotal=document.getElementById("Ordertotal").innerHTML=Math.round(total)

    //    two.innerHTML = `
    //    <div class="main">
    //  <h4 class="sum">Order summary</h4>
    //  <div class="sub"><p class="subtotal">Subtotal</p><p id="subtotal">₹${plus}</p></div>
    //  <div class="ta"><p class="taxt">Tax(18%) </p><p id="tax">₹ ${tax}</p></div>
    //  <div class="or"><h5 class="total">Order total</h5><p id="Ordertotal">₹ ${total}</p></div>
    //  <button id="checkout">Checkout</button>
    //  </div>`
     
    }

    window.select = select

    })

    .catch((error) => {
      // Handle any errors
    })



      function check(){

        onAuthStateChanged(auth, (user) => {
          if (user) {
          
            console.log("Hello");
            const uid = user.uid;
            console.log(uid);

            // ...
          } else {
            // User is signed out
            window.location.href="./login.html"
          }
        })
      }

      window.check=check
    



}



else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}



