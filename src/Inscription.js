import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

  function Inscription() {
      return(

        <>
        <h2 style={{paddingTop: "35px"}}>Inscrivez-vous gratuitement</h2>
        <div className="login-box">
            <form>
            <input type="text" placeholder="Nom"></input>
            <br></br>
            <input type="text" placeholder="Prénom"></input>
            <br></br>
            <input type="text" placeholder="Pseudo"></input>
            <br></br>
            <input type="password" placeholder="Mot de passe"></input>
            </form>
        </div>
        <button className="Btn" style={{marginTop: "180px"}}>Envoyer</button>
        <Link to="/"><button className="Btn" style={{marginTop: "240px"}}>Retour au menu</button></Link> 
        </>

      )
  }

  export default Inscription;