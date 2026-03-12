import "../styles/home.css"
import { motion } from "framer-motion";
import { useState } from "react";
import cloud2 from "../assets/cloudwhite.svg";
import mountain2 from "../assets/mountain2.svg";
import ChatBox from "../components/ChatBox.jsx";

function Home() {
  const API_URL = import.meta.env.VITE_API_URL;
 
  return (
    <div className="home-scene">
       <motion.img
        src={cloud2}
        className="cloud4"
        initial={{ x: "90vw" }}
        animate={{ x: "-180vw" }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear"
        }}
      />
       <motion.img
        src={cloud2}
        className="cloud5"
        initial={{ x: "90vw" }}
        animate={{ x: "-180vw" }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="home-content">
        <h1>Welcome to my Page</h1>
      <p>I’m Fahmi Aji Pranata. Explore my portfolio to see what I’ve been building, or chat with my AI assistant to learn more about me.
         It’s powered by Ollama running the Phi-3 model on my trusty (and slightly rusty) server laptop — so give it a moment to think </p>
      <ChatBox />
    </div>
  </div>
  );
}

export default Home
