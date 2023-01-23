import React, {useState, Fragment} from 'react';
import { Link } from "react-router-dom";
import { Container} from 'react-bootstrap';
import "antd/dist/antd.css";
import ReactToolTip from 'react-tooltip';
import app from 'firebase/app';
import ellieAvatar from '../Assets/images/Avatars/ellie-face.jpg';
require ('firebase/auth');
// import { UserOutlined } from '@ant-design/icons';
// import { Avatar } from 'antd';




  const Nav = () =>  {

    const [isConnected, setIsConnected] = useState(false);

    app.auth().onAuthStateChanged(function(user) {
 
       if (user) {
   
       setIsConnected(true);
   
     } else {
      
       setIsConnected(false);
       }
    })

    function Mute() {
      var audio = document.getElementById('music');
      audio.muted = !audio.muted;
  }

  return(
    <Container id="nav-container">
        <nav>
          <Link to="/Connexion"><input type="submit" value="Connexion" name="connexion" className="loginBtn"/></Link>
          <Link to="/Inscription"><input type="submit" value="Inscription" name="inscription" className="loginBtn"/></Link>
          {isConnected ? <Link to="/Profil"><img src={ellieAvatar} alt="Profil" id="avatar-nav"data-tip="Profil"></img>
          <ReactToolTip place="bottom" effect="solid" />
          </Link> : <Fragment /> }
          <i className="fas fa-volume-up" id="mute" onClick={Mute}></i>
        </nav>
    </Container>
  );
}

export default Nav;

