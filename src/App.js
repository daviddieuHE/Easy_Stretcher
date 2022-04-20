import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home';
import Log from './components/login';
import Brancardier from './components/brancardier';
import useToken from './useToken';


function App() {
  
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

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

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <div className="app">
      {(user.email != "") ? (
        <div>
          <button id='logout' onClick={Logout}>Logout</button>
          <Home />
        </div>
      ) : (
        <Log Login={Login} error={error} />
      )}
    </div>  
  );
}

export default App;
