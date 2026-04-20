import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {

    if (!message) return;

    const userMsg = { sender: "user", text: message };
    setChat([...chat, userMsg]);

    try {

      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a helpful healthcare assistant. Give safe, general advice only. Do not diagnose." },
            { role: "user", content: message }
          ]
        },
        {
          headers: {
            "Authorization": "Bearer YOUR_OPENAI_API_KEY",
            "Content-Type": "application/json"
          }
        }
      );

      const botReply = res.data.choices[0].message.content;

      setChat(prev => [...prev, { sender: "bot", text: botReply }]);

    } catch (err) {
      console.log(err);
      setChat(prev => [...prev, { sender: "bot", text: "Error getting response ❌" }]);
    }

    setMessage("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-lg rounded-xl p-4">

      <h2 className="font-bold mb-2">AI Health Assistant 🤖</h2>

      <div className="h-48 overflow-y-auto border p-2 mb-2">

        {chat.map((msg, i) => (
          <div key={i} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}

      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
        placeholder="Ask health question..."
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white w-full py-2 rounded"
      >
        Send
      </button>

      <p className="text-xs text-gray-500 mt-2">
        ⚠️ Not a medical diagnosis. Consult a doctor.
      </p>

    </div>
  );
}
export default Chatbot;