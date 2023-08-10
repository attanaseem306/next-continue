import{db,storage} from "./firebase.mjs"

import { collection,  getDocs,doc, getDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { ref, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

let id =(localStorage.getItem('id'));



// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {



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

