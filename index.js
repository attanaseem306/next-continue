 import{db,storage, auth} from "./firebase.mjs"

import { collection,  getDocs  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


//////////////////////////////     ////////////////////////////////////////////////////////////////

// console.log("hello vro kia haal he");

////////////////////////////  ye code firestore se value la kr dy ga  ///////////////////////////////////

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // const NA=user.name;
    // console.log(NA);
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
     alert("Sign Out successfully")
  })
 .catch((error) => {
    // An error happened.
  });
}
window.sign = sign


const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
   console.log(doc);
  
getDownloadURL(ref(storage, doc.id))
  .then((url) => {
      
   let link=url
  //  console.log(link);



   document.getElementById("card").innerHTML+=`
   
  <div class="card" style="width: 18rem;" onclick='go("${doc.id}")'>
   <img class="card-img-top" src="${link}" alt="Card image cap">
   <div class="card-body">
   <h5 class="card-text na">${doc.data().Name}</h5>
   <h5 class="card-title"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
   <h5 class="card-text">RS : ${doc.data().Price}</h5>
   <button id="bb">Add to bag</button>
   </div>
 </div>
`  
  })

  .catch((error) => {
    // Handle any errors
  });
  
})


function go(e){
  console.log(e);
  localStorage.setItem('id' , e);

  setTimeout(() => {
    location.href = './showdetail.html'
  }, 1000);

}


window.go = go

