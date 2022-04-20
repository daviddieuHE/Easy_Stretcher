import React, { useState } from "react";





export default function Log({ Login, error }) {
  const [details, setDetails] = useState({name: "", email: "", password: ""});
  
  const submiHandler = e => {
    e.preventDefault();

    Login(details);
  }

//TODO : login
  return (
      <div className="login-wrapper">
          
          <form onSubmit={submiHandler}>
            <div className="form-inner">
              <h1>Please Log In</h1>
              {(error != "") ? (<div className="error">{error}</div>) : "" }
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details,name: e.target.value})} value={details.name} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email} />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password} />
              </div>
              <input type="submit" value="Login" />
            </div>
          </form>
      </div>
  );
}