import React, {useState, useEffect} from 'react';
import logo from '../Assets/images/logo.jpg';
import {Link} from "react-router-dom";
import ReactToolTip from 'react-tooltip';
import { Container} from 'react-bootstrap';
import app from 'firebase/app';
// import playAudio from '../Components/ClickSound';
require ('firebase/auth');

function Home() {

  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    ReactToolTip.rebuild();
  });

  app.auth().onAuthStateChanged(function(user) {
      if (user) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
      }
    })

return(
<>
  <Container>
    <header> 
      <img src={logo} alt="logo" id="logo" className="fade-in"></img>
      <h1 className="hometitle fade-in text-center">LE QUIZZ</h1>
      <h2 className="hometitle2 fade-in text-center">Testez vos connaissances sur le jeu</h2>
    </header>
  </Container>
  <Container id="menuBtn-box">
      <Link to="/Scores"><button variant="primary"  className="menuBtn fade-in">Classement</button></Link>
      {isConnected ? <Link to="/Questions"><button variant="primary" className="menuBtn fade-in">Commencer</button></Link> 
      :
      <Link to="/Questions">
        <ReactToolTip place="top" effect="solid" borderColor="gray"/>
        <button variant="primary" className="menuBtn fade-in disabled" data-tip="Connectez-vous pour jouer">Commencer</button>
      </Link> }
      <Link to="/Rules"><button variant="primary" className="menuBtn fade-in">Voir les règles</button></Link>
  </Container>
</>
)}

export default Home;