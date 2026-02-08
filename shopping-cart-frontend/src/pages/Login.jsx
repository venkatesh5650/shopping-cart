import { useState } from "react";
import api from "../services/api";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/users/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch (err) {
      alert(err.response?.data?.message || "Invalid username/password");
    }
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

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
