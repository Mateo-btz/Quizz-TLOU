import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

  function Connexion() {
      return(

          <>
          <h2 style={{paddingTop: "35px"}}>Connectez-vous</h2>
          <div className="login-box">
              <form>
              <input type="text" placeholder="Votre pseudo"></input>
              <br></br>
              <input type="password" placeholder="Votre mot de passe"></input>
              </form>
          </div>
          <button className="Btn" style={{marginTop: "70px"}}>Envoyer</button>
          <Link to="/"><button className="Btn" style={{marginTop: "130px"}}>Retour au menu</button></Link> 
          </>
      )
  }

export default Connexion;