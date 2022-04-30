import React, { useEffect, useState } from 'react';
import Log from './pages/login';
import Navbar from './components/navbar/navbar';
import Infirmier from './pages/infirmier';
import Brancardier from "./pages/brancardier"
import { useMutation } from 'react-query';
import { logUser } from './request';
import jwt_decode from "jwt-decode";

const infirmierUser = {
  email: "infirmier@admin.com",
  password: "infirmier123"
}

const brancardierUser = {
  email: "brancardier@admin.com",
  password: "brancardier123"
}


//Fonction App renvoie le composant Router

function App() {
  useEffect(() => {
    if ('Notification' in window)
      Notification.requestPermission()
  })

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Router />
    </div>
  );
}


//Fonction Router renvoie la page Login, Infirmier ou Brancardier selon les log.
function Router() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [jour, setJour] = useState("Lundi")

  const loginMutation = useMutation(logUser, {
    onSuccess: setUser
  })

  const logout = () => {
    setUser(null);
  }

  //Condition pour savoir quels sont les log et donc afficher la bonne page.
  if (user) {
    try {
      const info = jwt_decode(user)
      if (info.role == 0)
        return (
          <div style={{ width: "100%", height: "100%" }}>
            <Navbar logout={logout} jour={jour} handleChange={(e) => setJour(e.target.value)} token={user} />
            <Infirmier jour={jour} token={user} />
          </div>
        )
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <Navbar logout={logout} jour={jour} handleChange={(e) => setJour(e.target.value)} token={user} />
          <Brancardier jour={jour} token={user} />
        </div>
      )
    } catch (err) { }
  }
  return <Log Login={loginMutation.mutate} error={error} />


}

export default App;
