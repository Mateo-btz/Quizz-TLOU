import React from 'react';
import logo from './images/logo.jpg';
import  start  from './Music';
import clickSoundEffect from './sounds/littleclick.mp3';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";



function Home() {
  return(

            <>
            <div> 
            <img src={logo} alt="logo" id="logo" className="fade-in"></img>
            <h1 className="hometitle fade-in text-center">LE QUIZZ</h1>
            <h2 className="fade-in text-center">Testez vos connaissances sur le jeu</h2>
          </div>
          
          <div
          style=
      {{
          position: "absolute",
          bottom: "0",
          marginBottom: "100px"
      }}>
      <Link to="/Questions"><button variant="primary" className="menuBtn fade-in">Commencer</button></Link>
      <Link to="/Scores"><button variant="primary"  className="menuBtn fade-in">Voir les scores</button></Link>
      <Link to="/Rules"><button variant="primary" className="menuBtn fade-in">Voir les règles</button></Link>
      </div>
      </>



          );
}
export default Home;