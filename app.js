// Simulate a basic intelligent bot interaction

// Function to simulate sending commands and receiving replies
function processCommand(command) {
  // In a real application, this part would call your AI or trading engine API.
  const lowerCaseCmd = command.trim().toLowerCase();
  if (lowerCaseCmd === "status") {
    return "The EA is in Phase 2, analyzing market volatility.";
  } else if (lowerCaseCmd.includes("trade")) {
    return "Trade initiated. Monitoring market conditions...";
  } else {
    return "I'm sorry, I didn't understand that command.";
  }
}

const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatOutput = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
  const command = userInput.value;
  if (!command) return;
  
  // Append the user's command to the chat output
  const userMessage = document.createElement("div");
  userMessage.textContent = "You: " + command;
  chatOutput.appendChild(userMessage);
  
  // Process command (simulate AI response)
  const response = processCommand(command);
  const botMessage = document.createElement("div");
  botMessage.textContent = "52bOT: " + response;
  chatOutput.appendChild(botMessage);
  
  // Clear input field and scroll chat box
  userInput.value = "";
  chatOutput.scrollTop = chatOutput.scrollHeight;
});
