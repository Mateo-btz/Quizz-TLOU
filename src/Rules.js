import React, {Fragment} from 'react';
import play from './Music';
import { Link } from "react-router-dom";
import { Container} from 'react-bootstrap';


  function Rules() {
      return(
        <>
        <Container id="rules-container">
        <h2 style={{paddingTop: "130px"}}>Bienvenue, Survivant.</h2>  
        <h2 className="rulestext">
                                  A quel point connaît-tu The last of us ? Nous allons vite le savoir.<br></br>
                                  Il y a 20 questions, tente d'atteindre le meilleur score et ainsi figurer au classement.
                                  Il n'y a pas de temps imparti, bonne chance !
        </h2>
 </ Container>
 <div>
 <Link to="/"><button variant="primary" className="Btn" id="rulesBtn" style={{marginTop: "160px", position: "absolute"}} onClick={play}>Retour</button></Link>
 </div>
 </>
      )}


export default Rules;