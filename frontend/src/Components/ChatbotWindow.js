import React, { useState, useEffect, useRef } from "react";

const ChatbotWindow = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "user",
      content: "Give me your company name",
    },
    {
      role: "assistant",
      content: "Hello! This is Company Support. How can I assist you?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const chatContainerRef = useRef(null); // Ref to the chat container element

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return; // Don't send empty messages

    // Create a new user message and add it to the messages array
    const newUserMessage = {
      role: "user",
      content: inputMessage,
    };

    // Update the messages state with the new message
    setMessages([...messages, newUserMessage]);

    // Clear the input field
    setInputMessage("");

    // Optionally, you can handle sending this message to your chatbot or server here
  };

  return (
    <div className="floating-chat-container">
      <div
        className={`floating-icon ${isChatOpen ? "open" : ""}`}
        onClick={toggleChat}
      >
        <span>💬</span>
      </div>
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span> Product Chat Window</span>
            <button className="close-button" onClick={toggleChat}>
              Close
            </button>
          </div>
          <div className="chat-messages" ref={chatContainerRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.role === "user" ? "user" : "assistant"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWindow;
