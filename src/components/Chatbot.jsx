import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Set the config globally
    window.chatbaseConfig = {
      chatbotId: "txO3OVHP9KqED-jwawgRQ", // Replace with your real bot ID
    };

    // Load the Chatbase script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up when component unmounts
    };
  }, []);

  return null;
};

export default Chatbot;
