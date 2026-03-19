import { Link } from "react-router-dom"

function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h2>Portfolio Web App</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/mystory">My Story</Link>
          <Link to="/Login">Login</Link>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        </div>
    </nav>
  )
}

export default Navbar
