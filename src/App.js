import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Log from './pages/login';
import Brancardier from './components/brancardier';
import Navbar from './components/navbar';


function App() {
  
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const [jour, setJour] = useState("Lundi")

  const Login = details => {
    console.log(details)

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details don't match");
      setError("Details don't match");
    }
  }

  const logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <div style={{width: "100%", height: "100%"}}>
      {(user.email != "") ? (
        <div style={{width: "100%", height: "100%"}}>
          <Navbar logout={logout} jour={jour} handleChange={(e) => setJour(e.target.value)} />
          <Home jour={jour} />
        </div>
      ) : (
        <Log Login={Login} error={error} />
      )}
    </div>  
  );
}

export default App;
