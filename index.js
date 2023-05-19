// JavaScript code to dynamically render libraries 
 
// Get the library list container 
const libraryList = document.getElementById("library-list"); 
 
// Function to fetch and render libraries 
function fetchLibraries() { 
  // Replace this with the appropriate URL for fetching libraries from the server 
  const url = "your_fetch_url_here"; 
 
  // Fetch libraries from the server 
  fetch(url) 
    .then(response => response.json()) 
    .then(data => { 
      // Clear existing libraries 
      libraryList.innerHTML = ""; 
 
      // Render libraries 
      data.forEach(library => { 
        const libraryItem = document.createElement("div"); 
        libraryItem.classList.add("library-item"); 
        libraryItem.innerHTML = `<p><span>Shop Name:</span> ${library.shopName}</p><p><span>Library Name:</span> ${library.libraryName}</p>`; 
        libraryList.appendChild(libraryItem); 
      }); 
    }) 
    .catch(error => { 
      console.error("Error fetching libraries:", error); 
    }); 
} 
 
// Call the fetch 
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");

sendButton.addEventListener("click", () => {
  const message = messageInput.value;
  if (message.trim() !== "") {
    const chatMessage = document.createElement("p");
    chatMessage.textContent = message;
    chatMessages.appendChild(chatMessage);
    messageInput.value = "";
  }




});









