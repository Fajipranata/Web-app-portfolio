function Login() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        padding: "40px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "white",
        width: "300px"
      }}>
        <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />

        <button style={loginButtonStyle}>
          Login
        </button>
      </div>
    </div>
  )
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc"
}

const loginButtonStyle = {
  width: "100%",
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#228be6",
  color: "white",
  cursor: "pointer"
}

export default Login