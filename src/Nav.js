import React from 'react';
import { Link } from "react-router-dom";
import { Container} from 'react-bootstrap';



  const Nav = () =>  {
      return(
        <Container id="nav-container">
        <nav>
        <Link to="/Connexion"><input type="submit" value="Connexion" name="connexion" className="loginBtn"/></Link>
        <Link to="/Inscription"><input type="submit" value="Inscription" name="inscription" className="loginBtn"/></Link>
        </nav>
        </Container>

      );
  }


  export default Nav;

