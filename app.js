firebase.initializeApp({
  apiKey: "AIzaSyBCL7c5ANndA8cWIBhbr4qOYpgLkX1ZZtg",
  authDomain: "proyectousuarios-eedc8.firebaseapp.com",
  projectId: "proyectousuarios-eedc8"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users")
  .add({
    first: "Carlos",
    last: "Sanchez",
    born: 1982
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
