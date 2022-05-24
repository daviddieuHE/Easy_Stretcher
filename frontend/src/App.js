import React, { useEffect, useState } from 'react';
import Log from './pages/login/login';
import Navbar from './components/navbar/navbar';
import Infirmier from './pages/infirmier/infirmier';
import Brancardier from "./pages/brancardier/brancardier"
import { useMutation } from 'react-query';
import { logUser } from './request';
import jwt_decode from "jwt-decode";

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
  const [user, setUser] = useState(window.sessionStorage.getItem("TOKEN"));//cherche dans Application>session storage si un token existe, si oui il le récup et le réutilise, si pas il renvoit NULL
  const [error, setError] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]) //new Date().toLocaleString('en-en', {  weekday: 'long' }); -> récupère la date du jour et converti en chaine de caractère (fr-fr pour avoir en français)
//new date = nouvel objet date et il est assigné automatiquement a la date du jour
//toISOString conient aussi le temps, donc on split a partir du T, ce qui donne un tableau d'objet, et je récup l'index 0 car la date est en premiere position du tableau 
// ex de new date : '2022-05-08T15:13:08.625Z'


  //Post -> useMutation / Get -> useQuery
  const loginMutation = useMutation(logUser, {
    onSuccess: (token) => {
      window.sessionStorage.setItem("TOKEN", token);// au moment du login, on enregistre le token dans le local storage afin de pouvoir le check au rechargement de la page 
      setUser(token)
    },
    onError: (e) => setError(e.response.data)
  })

  const logout = () => {
    window.sessionStorage.removeItem("TOKEN") // on supprime le token au moment du logout, une session est ouverte a l'ouverture d'un onglet, et se ferme a la fermeture de l'onglet
    setUser(null);
  }

  //Condition pour savoir quels sont les log et donc afficher la bonne page.
  if (user) {// est ce que l'utilisateur est connecté ? 
    try {
      const info = jwt_decode(user)//permet de récupéré les infos contenues dans le token a savoir le role de l'utilisateur connecté
      if (info.role == 0)
        return (
          <div style={{ width: "100%", height: "100%" }}>
            <Navbar logout={logout} date={date} handleChange={setDate} token={user} />
            <Infirmier date={date} token={user} />
          </div>
        )
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <Navbar logout={logout} date={date} handleChange={setDate} token={user} />
          <Brancardier date={date} token={user} />
        </div>
      )
    } catch (err) {
      setError(err)
     }
  }
  return <Log Login={loginMutation.mutate} error={error} />


}

export default App;
