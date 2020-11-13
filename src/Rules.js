import React from 'react';
import play from './Music';
import { Link } from "react-router-dom";

  function Rules() {
      return(
        <>
        <div className="rules">
        <h2 className="rulestext">Vous devez répondre à 20 questions, essayez d'atteindre le meilleur score.
            Il n'y a pas de temps imparti, bonne chance !
        </h2>

            
            <Link to="/"><button style={{marginTop: "50px"}} variant="primary" className="Btn" onClick={play}>Retour</button></Link> 
        </div>
        </>
      )
  }


export default Rules;