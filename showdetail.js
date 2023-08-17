import{db,storage,auth} from "./firebase.mjs"

import { collection,doc, getDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


let id =(localStorage.getItem('id'));


// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {

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
        

      

     let link=url;
     let cloth=document.getElementById('cloth').innerHTML=docSnap.data().Name;
     let rupess=document.getElementById('rupess').innerHTML=docSnap.data().Price;
     let picture=document.getElementById("picture").src=link;
     
    })
  
    .catch((error) => {
      // Handle any errors
    });
  


} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}






 
  




// })

