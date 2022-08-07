import React, {useState, Fragment} from 'react';
import { Link } from "react-router-dom";
import { Container} from 'react-bootstrap';
import "antd/dist/antd.css";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ReactToolTip from 'react-tooltip';
import app from 'firebase/app';
require ('firebase/auth');



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
        <>
        <Container id="avatarContainer">
          {isConnected ? <Link to="/Profil"><Avatar icon={<UserOutlined />} style={{marginTop: "10px"}} data-tip="Profil" id="avatarNav"></Avatar>
          <ReactToolTip
      place="right"
      effect="solid"
      border="true"
       />
       </Link> : <Fragment /> }
        </Container>
        <Container id="nav-container">
            <nav>
              <Link to="/Connexion"><input type="submit" value="Connexion" name="connexion" className="loginBtn"/></Link>
              <Link to="/Inscription"><input type="submit" value="Inscription" name="inscription" className="loginBtn"/></Link>
              <i className="fas fa-volume-up" id="mute" onClick={Mute}></i>
            </nav>
        </Container>
        </>
    );
  }


  export default Nav;

