var config = {
  apiKey: "AIzaSyAGTozRGWI9myAcelAXCX3hetSUHms7YZE",
  authDomain: "virtuallytestingfoundation.firebaseapp.com",
  databaseURL: "https://virtuallytestingfoundation-default-rtdb.firebaseio.com",
  projectId: "virtuallytestingfoundation",
  storageBucket: "virtuallytestingfoundation.appspot.com",
  messagingSenderId: "939140932658",
  appId: "1:939140932658:web:1246270e346c924355882b",
};
let datentime=String(new Date());
firebase.initializeApp(config);
var i = 1;
// Reference messages collection
var messagesRef = firebase.database().ref("Messages");

// Listen for form submit
document.getElementById("form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var subject = getInputVal("subject");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, email, subject, message);

  // Show alert
  // document.querySelector('.dots_container').style.display = 'none';

  // // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.dots_container').style.display = 'block';
  // },3000);

  // Clear form
  document.getElementById("form").reset();
  alert("Message Sent!");
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message) {
  var newMessageRef = messagesRef.child(email.replace(".", ")")+' '+datentime);
  i = i + 1;
  newMessageRef.set({
    datentime:datentime,
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}
