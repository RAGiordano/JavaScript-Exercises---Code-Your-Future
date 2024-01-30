// TASK 1
document.addEventListener("DOMContentLoaded", function() {
    // Get the reference to the <p> element with the id "message"
    let mensajeElement = document.getElementById("message");
  
    // Change the content of the <p> element
    mensajeElement.textContent = "The link between HTML and JavaScript in the header was successful!";
});

// TASK 2
// Declare a variable to store the message
let storedMessage2 = "";

// Function to capture the user's message
function inputMessage2() {
    // Use prompt to get user input
    storedMessage2 = prompt("Enter a message:");
}

// Function to display the stored message
function showMessage2() {
    // Check if there is a stored message
    if (storedMessage2 !== "") {
        // Display the message in the element with id "message"
        alert(storedMessage2);
    } else {
        // Show a default message if there is no stored message
        alert("No message stored.");
    }
}

// TASK 3
function sayHello() {
  let name3 = prompt("¿What is your name?");
  alert("Hello, " + name3 + "!");
}

// TASK 4
function sayHello4() {
  let yearOfBirth = prompt("¿What is your year of birth?");
  let actualDate = new Date();
  let actualYear = actualDate.getFullYear();
  alert("You are " + (actualYear - yearOfBirth - 1) + " or " + (actualYear - yearOfBirth) + " years old.");
}