import React, { useState } from "react";
import './login.css'



//Page de Login
export default function Log({ Login, error }) {
  const [details, setDetails] = useState({name: "", email: "", password: ""});
  
  const submiHandler = e => {
    e.preventDefault();//prévient l'erreur.
    Login(details);
  }

//TODO : login
  return (
      <div data-testid = "loginDiv" className="login-wrapper">
          
          <form onSubmit={submiHandler}>
            <div className="form-inner">
              <h1>Please Log In</h1>
              {(error != "") ? (<div className="error">{error}</div>) : ""}

              <div className="form-group">
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email} />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password} />
              </div>
              <input type="submit" value="Login" />
            </div>
          </form>
      </div>
  );
}