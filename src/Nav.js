import React from 'react';
import { Link } from "react-router-dom";


  const Nav = () =>  {
      return(
        <nav>
        <Link to="/Connexion"><input type="submit" value="Connexion" name="connexion" className="loginBtn"/></Link>
        <Link to="/Inscription"><input type="submit" value="Inscription" name="inscription" className="loginBtn"/></Link>
        </nav>

      );
  }


  export default Nav;

