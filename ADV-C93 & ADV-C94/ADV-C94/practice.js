var firebaseConfig = [
    apiKey: "AIzaSyCe30pabU7Opkz1W1CJ7E-5kNzC4X_-_Cs",
  authDomain: "pratice-rasthro.firebaseapp.com",
  databaseURL: "https://pratice-rasthro-default-rtdb.firebaseio.com",
  projectId: "pratice-rasthro",
  storageBucket: "pratice-rasthro.appspot.com",
  messagingSenderId: "43193821131",
  appId: "1:43193821131:web:862d73af4f822058b6b84e"
];

firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database ().ref("/").child(user_name).update({
        purpose: "adding user";
    });
}