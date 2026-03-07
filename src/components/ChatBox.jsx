import { useState } from "react";

function ChatBox() {
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };

    const updatedMessages = [
      ...messages.map((msg) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.text,
      })),
      userMessage,
    ];

    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setLoading(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: updatedMessages,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }

    setMessage("");
    setLoading(false);
  };

  // 🚨 Warning screen before using chat
  if (!agreed) {
    return (
      <div className="chat-warning">
        <h3>⚠ AI Response Notice ⚠</h3>
        <p>
          This AI assistant runs on a very small local server.
          Responses may take 40–60 seconds depending on load.
          Sometimes the AI have cold start, please reload the page if the ChatBox won't reply
        </p>
        <p className="patient-warning">
          Please be patient while the AI generates an answer.
        </p>
        <button onClick={() => setAgreed(true)}>
          I Understand
        </button>
      </div>
    );
  }

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
          placeholder="Ask anything about me..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBox;