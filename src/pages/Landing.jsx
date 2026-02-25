import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      
      <div className="cloud cloud-1">
        <div className="puff puff-1"></div>
        <div className="puff puff-2"></div>
        <div className="puff puff-3"></div>
      </div>

      <div className="cloud cloud-2">
        <div className="puff puff-1"></div>
        <div className="puff puff-2"></div>
        <div className="puff puff-3"></div>
      </div>
      
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