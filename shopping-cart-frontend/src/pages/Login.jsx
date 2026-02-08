import { useState } from "react";
import api from "../services/api";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (user, pass) => {
    try {
      const res = await api.post("/users/login", {
        username: user,
        password: pass,
      });
      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch (err) {
      alert(err.response?.data?.message || "Invalid username/password");
    }
  };

  const demoLogin = () => {
    handleLogin("demo", "demo123");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => handleLogin(username, password)}>
          Login
        </button>

        <button
          onClick={demoLogin}
          style={{ marginTop: "10px", background: "#16a34a" }}
        >
          Demo Login
        </button>
      </div>
    </div>
  );
}
