import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


  function Nav() {
      return(
        <nav>
        <Link to="/Connexion"><input type="submit" value="Connexion" name="connexion" className="loginBtn"/></Link>
        <Link to="/Inscription"><input type="submit" value="Inscription" name="inscription" className="loginBtn"/></Link>
        </nav>

      );
  }

  export default Nav;

