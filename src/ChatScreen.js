import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Elen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      message: "Whats up",
    },
    {
      name: "Elen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      message: "How is going!",
    },
    {
      message: "Hi! How are you Elen",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">YOU MATCHED WITH ELEN ON 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen_inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
