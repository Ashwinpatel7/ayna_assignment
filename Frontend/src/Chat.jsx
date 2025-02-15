import React, { useState, useEffect ,useContext} from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
    const navigate = useNavigate();
  useEffect(() => {
    // Connect to WebSocket server
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("✅ Connected to WebSocket");
    };

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, { sender: "Server", text: event.data }]);
    };

    socket.onclose = () => {
      console.log("❌ Disconnected from WebSocket");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (message && ws) {
      ws.send(message);
      setMessages((prev) => [...prev, { sender: "You", text: message }]);
      setMessage(""); // Clear input field
    }
  };

  const handler =async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (err) {
     console.log(err);
     
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <button className="bg-black text-white px-5 py-3 rounded-full" onClick={handler}>Logout</button>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-lg font-bold mb-3 text-center">🗨️ WebSocket Chat</h2>
        <div className="h-64 overflow-y-auto border p-2 rounded-lg bg-gray-50">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={msg.sender === "You" ? "text-right text-blue-500" : "text-left text-gray-700"}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <input
            type="text"
            className="flex-grow p-2 border rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
