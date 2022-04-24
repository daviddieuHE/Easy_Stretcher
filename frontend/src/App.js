import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Log from './pages/login';
import Navbar from './components/navbar';
import Infirmier from './pages/infirmier';
import Brancardier from "./pages/brancardier"

const infirmierUser = {
  email: "infirmier@admin.com",
  password: "infirmier123"
}

const brancardierUser = {
  email: "brancardier@admin.com",
  password: "brancardier123"
}

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Router  />
    </div>
  );
}

function Router() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [jour, setJour] = useState("Lundi")
  
  const Login = details => {
    if ((details.email == infirmierUser.email && details.password == infirmierUser.password) ||
      (details.email == brancardierUser.email && details.password == brancardierUser.password)) {
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details don't match");
      setError("Details don't match");
    }
  }

  const logout = () => {
    setUser({ name: "", email: "" });
  }

  switch (user.email) {
    case (infirmierUser.email):
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <Navbar logout={logout} jour={jour} handleChange={(e) => setJour(e.target.value)} />
          <Infirmier jour={jour} />
        </div>
      )
    case (brancardierUser.email):
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <Navbar logout={logout} jour={jour} handleChange={(e) => setJour(e.target.value)} />
          <Brancardier jour={jour} />
        </div>
      )
    default:
      return <Log Login={Login} error={error} />
  }
}

export default App;
