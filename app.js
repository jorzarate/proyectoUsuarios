firebase.initializeApp({
  apiKey: "AIzaSyBCL7c5ANndA8cWIBhbr4qOYpgLkX1ZZtg",
  authDomain: "proyectousuarios-eedc8.firebaseapp.com",
  projectId: "proyectousuarios-eedc8"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//Agregar usuarios
function guardar() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var fecha = document.getElementById("fecha").value;

  db.collection("users")
    .add({
      first: nombre,
      last: apellido,
      born: fecha
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("nombre").value = '';
      document.getElementById("apellido").value = '';
      document.getElementById("fecha").value = '';
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

//Leer Usuarios
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {

    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
            <tr>
                <th scope="row">${doc.id}</th>
                <td>${doc.data().first}</td>
                <td>${doc.data().last}</td>
                <td>${doc.data().born}</td>
            </tr>`;
    });
});
