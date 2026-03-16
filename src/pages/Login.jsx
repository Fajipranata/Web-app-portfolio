import "../styles/login.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const API_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate();

  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      })

      const data = await res.json()

      if (data.token) {

        localStorage.setItem("token", data.token)

        navigate("/admin")

      } else {

        alert("Wrong password")

      }

    } catch (err) {

      console.error(err)
      alert("Login failed")

    }

  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>

        <h2 className="login-title">Admin Login</h2>

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit" className="login-button">
          Login
        </button>

        <button
          type="button"
          className="cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>

      </form>
    </div>
  );
}

export default Login;