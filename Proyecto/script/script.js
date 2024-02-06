// TASK 1
document.addEventListener("DOMContentLoaded", function () {
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

// TASK 5
let product5 = "Iphone 15 Pro";
product5Name = document.getElementById("product5-name");
product5Name.textContent = product5;
let productStock = 10;
stock5 = document.getElementById("stock5");
stock5.textContent = "Stock: " + productStock;
function buy5(event) {
  event.preventDefault();
  let quantity = document.getElementById("quantity");
  if (productStock >= quantity.value) {
    productStock -= quantity.value;
    alert("Thank you for your purchase. Transaction complete.");
  } else {
    alert("Transaction failed. Insufficient stock available for the selected item.");
  }
  quantity.value = "";
  stock5.textContent = "Stock: " + productStock;
  quantity.focus();
}

// TASK 6
function secretNumber6(){
  let secretDiscountCode = "TOPSECRET";
  let codeAttempts = 0;
  let codeInput = "";
  let maxAttempts = 5;

  do {
    codeAttempts ++;
    codeInput = prompt("Attempt " + codeAttempts + " - Enter code:");
    
  } while (codeInput != secretDiscountCode && codeAttempts < maxAttempts)

  if (codeInput == secretDiscountCode) {
    alert("Code entered successfully")
  } else {
    alert("Maximum attempts reached");
  }
}


// TASK 7
function convert7(event){
  event.preventDefault();
  let rate = getElementById("rate7");
  let amount = getElementById("amount7");
  let convertion = getElementById("convertion7");
  convertion.textContent = parseFloat(amount.value) / rate;
}

// TASK LIST
document.addEventListener('DOMContentLoaded', function () {
  let taskInput = document.getElementById('taskInput');
  let taskList = document.getElementById('taskList');

  function addTask() {
      let taskText = taskInput.value.trim();
      
      if (taskText !== '') {
          let newTask = document.createElement('li');
          newTask.innerHTML = `
              <span>${taskText}</span>
              <button onclick="toggleTask(this)">Completed</button>
              <button onclick="removeTask(this)">Remove</button>
          `;
          taskList.appendChild(newTask);
          taskInput.value = '';
      }
  }

  window.addTask = addTask;

  window.toggleTask = function(button) {
      let task = button.parentNode.querySelector("span");
      task.classList.toggle('completed');
  };

  window.removeTask = function(button) {
      let task = button.parentNode;
      task.parentNode.removeChild(task);
  };
});

// MODIFYING ARRAYS
function modifyingArrays1(){
  let originalArray = [1, 2, 3, 4];
  // let originalArrayCopy = originalArray;
  let originalArrayCopy = [] + originalArray;
  let poppedElement = originalArray.pop();
  let shiftedElement = originalArray.shift();


  let resultContainer = document.getElementById('array1result');
  let array1result = document.createElement('div');
          array1result.innerHTML = `
              <h3 style="margin: 30px 0">Result</h3>
              <p>Original array: ${originalArrayCopy}</p>
              <p>Popped element: ${poppedElement}</p>
              <p>Shifted element: ${shiftedElement}</p>
              <p>My final array: ${originalArray}</p>
          `;
  resultContainer.appendChild(array1result);
}
