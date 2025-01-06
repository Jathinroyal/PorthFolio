// // Function to toggle the send button's disabled state
// function toggleSendButton() {
//     const messageInput = document.getElementById('message-input');
//     const sendButton = document.getElementById('send-button');
//     sendButton.disabled = messageInput.value.trim() === '';
// }

// // Function to send a message and display in the chat box
// function sendMessage() {
//     const messageInput = document.getElementById('message-input');
//     const chatBox = document.getElementById('chat-box');
//     const messageText = messageInput.value.trim();

//     if (messageText) {
//         const timestamp = new Date().toLocaleTimeString();

//         // Create user message
//         const userMessage = document.createElement('div');
//         userMessage.classList.add('chat-message');
//         userMessage.innerHTML = messageText + `<div class="message-time">${timestamp}</div>`;
//         chatBox.appendChild(userMessage);

//         // Scroll to the bottom of the chat box
//         chatBox.scrollTop = chatBox.scrollHeight;

//         // Clear the input field
//         messageInput.value = '';
//         toggleSendButton();
//     }
// }

// // Function to make the emoji follow the cursor
// document.addEventListener('mousemove', (e) => {
//     const emoji = document.getElementById('emoji');
//     emoji.style.left = `${e.clientX + 10}px`; // Add a small offset
//     emoji.style.top = `${e.clientY - 20}px`; // Adjust to place it near the cursor
// });
