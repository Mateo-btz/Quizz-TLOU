import React from 'react';
import { Link } from "react-router-dom";
import Logout from "./Logout";


  function Nav() {
      return(
        <nav>
        <Link to="/Connexion"><input type="submit" value="Connexion" name="connexion" className="loginBtn"/></Link>
        <Link to="/Inscription"><input type="submit" value="Inscription" name="inscription" className="loginBtn"/></Link>
        <Logout />
        </nav>

      );
  }

  export default Nav;

