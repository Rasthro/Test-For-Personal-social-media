
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDERl4L7JCcFHz0Rry1e811wuI9ABjS6VA",
  authDomain: "kwitter-9748b.firebaseapp.com",
  projectId: "kwitter-9748b",
  storageBucket: "kwitter-9748b.appspot.com",
  messagingSenderId: "1024288489029",
  appId: "1:1024288489029:web:ea0d91c1dad656aecc2d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById(room_name).value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value' , function(snapshot) {
            document.getElementById("output").innerHTML Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class="room_name" id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML + = row;
      });
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = kwitter_page.html;
}