import { useState } from "react";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", text: message };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();

      const aiMessage = { role: "ai", text: data.reply };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setMessage("");
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.role === "user" ? "user-msg" : "ai-msg"}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="ai-msg">Thinking...</div>}
      
      </div>
        <form
        className="chat-input"
        onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
        }}
        >
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about Fahmi..."
        />
        <button type="submit">
            Send
        </button>
        </form>
      </div>
  );
}

export default ChatBox;