import { useState } from "react";
import Login from "./pages/Login";
import Items from "./pages/Items";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return loggedIn ? <Items /> : <Login onLogin={() => setLoggedIn(true)} />;
}

export default App;
