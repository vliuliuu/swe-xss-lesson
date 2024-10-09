// Select DOM elements
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

// Event listener for form submission
chatForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload on form submission

  const userMessage = messageInput.value;

  // **Vulnerable Code**: Directly injecting unsanitized user input into the DOM
  const messageElement = document.createElement('p');
  messageElement.innerHTML = userMessage; // Allow HTML injection
  chatBox.appendChild(messageElement);

  messageInput.value = ''; // Clear the input field
});
