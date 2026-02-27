import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import plane from "/home/fahmi/frontend/src/assets/plane.svg";
import cloud from "/home/fahmi/frontend/src/assets/cloud.svg";
import cloud2 from "/home/fahmi/frontend/src/assets/cloudwhite.svg";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      <motion.img
        src={plane}
        className="plane"
        initial={{ x: "200vw" }}
        animate={{ x: "-180vw" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          rotate: 90,
        }}
      />

      <motion.img
        src={cloud2}
        className="cloud3"
        initial={{ x: "-90vw" }}
        animate={{ x: "180vw" }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.img
        src={cloud2}
        className="cloud2"
        initial={{ x: "-90vw" }}
        animate={{ x: "180vw" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />

     <motion.img
        src={cloud2}
        className="cloud1"
          initial={{ x: "-70vw"}}
          animate={{ x: "100vw" }}
          transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="hero-content">
        <h1 className="fade-in">
          Welcome to Fahmi's Portfolio
        </h1>
      
        <p className="subheadline fade-in-delay">
          Building modern web experiences with React & FastAPI
        </p>

        <div className="hero-buttons fade-in-delay-2">
          <button onClick={() => navigate("/home")}>
            Continue as Guest
          </button>

          <button onClick={() => navigate("/login")}>
            Login as Admin
          
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "15px 30px",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: "#228be6",
  color: "white"
}

export default Landing