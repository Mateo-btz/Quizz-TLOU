import React, {Fragment} from 'react';
import play from '../Components/Music';
import { Link } from "react-router-dom";

function Rules() {
  
  return(
      <div class="rules-container">
        <h2>Bienvenue, Survivant.</h2>  
        <h3 class="rulestext">
          A quel point connais-tu The last of us ? Nous allons vite le savoir.<br></br>
          Il y a 10 questions, tente d'atteindre le meilleur score et ainsi figurer au classement.
          Il n'y a pas de temps imparti, bonne chance !
        </h3>
        <Link to="/"><button variant="primary" className="Btn" id="rulesBtn" onClick={play}>Retour</button></Link>
      </div>
  )}

export default Rules;