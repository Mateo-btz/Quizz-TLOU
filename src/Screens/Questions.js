import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { FirebaseContext } from '../Firebase';
import 'firebase/auth';
import app from 'firebase/app';

export default function Questions() {

   const questions = [
    {
      question: "Quel age a Ellie la première fois qu'elle rencontre Joel ?",
      answerOptions: [
          { text: '13', correct: false},
          { text: '14', correct: true},
          { text: '15', correct: false},
          { text: '16', correct: false}
      ]
  },
  {
     question: "Comment s'appelle la cheffe des Lucioles ?",
     answerOptions: [
      { text: 'Marie', correct: false},
      { text: 'Marla', correct: false},
      { text: 'Marlène', correct: true},
      { text: 'Marjolène', correct: false}
      
     ]
  },
  {
      question: "Quel est le nom de famille de Joel ?",
      answerOptions: [
      { text: 'Miller', correct: true},
      { text: 'Smith', correct: false},
      { text: 'Gordon', correct: false},
      { text: 'Grimms', correct: false}
       ]
  },
  {
      question: "Quel objet Ellie dérobe-t'elle afin de le donner à Sam ?",
      answerOptions: [
      { text: 'Une BD "Savage Starlight', correct: false},
      { text: 'Une balle de Baseball', correct: false},
      { text: 'Un poster', correct: false},
      { text: 'Un robot', correct: true}
       ]
  },
  {
      question: "Qu'est ce qu'Ellie va troquer avec David contre des médicaments ?",
      answerOptions: [
      { text: 'Un lapin', correct: false},
      { text: 'Un fusil', correct: false},
      { text: 'Un cerf', correct: true},
      { text: 'Des munitions', correct: false}
       ]
    },
    {
      question: "Qui est le petit ami d'Abby ?",
      answerOptions: [
      { text: 'Owen', correct: true},
      { text: 'Henry', correct: false},
      { text: 'Max', correct: false},
      { text: 'Jimmy', correct: false}
       ]
    },
    {
      question: "Pourquoi Lev est-il banni du clan des séraphites ?",
      answerOptions: [
      { text: "Lev est homosexuel", correct: false},
      { text: "Lev a trahi un de ses frères", correct: false},
      { text: "Lev voulait être un guerrier", correct: true},
      { text: "Lev s'en est pris à sa mère", correct: false}
       ]
    },
    {
      question: "Ou se trouve le lieu du combat final entre Ellie et Abby ?",
      answerOptions: [
      { text: 'Eastbrook', correct: false},
      { text: 'Hillcrest', correct: false},
      { text: 'Capitol Hill', correct: false},
      { text: 'Santa Barbara', correct: true}
       ]
    },
    {
      question: "Dans quelle partie du corps d'Ellie se trouve le remède de l'humanité ?",
      answerOptions: [
      { text: 'Il circule dans son sang', correct: false},
      { text: 'Il pousse dans son cerveau', correct: true},
      { text: 'Il est dans son coeur', correct: true},
      { text: 'On ne sait pas exactement', correct: false}
       ]
    },
    {
      question: "Avec qui Joel a failli se battre lors de la fête à Jackson ?",
      answerOptions: [
      { text: 'Jesse', correct: false},
      { text: 'Donnie', correct: false},
      { text: 'Seth', correct: true},
      { text: 'Colin', correct: false}
       ]
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  var [points, setPoints] = useState(0);
  const firebase = useContext(FirebaseContext);
  

  // username.addEventListener("keyup", () => {
  //     saveScoreBtn.disabled = !username.value;
  //   })
  
  const handleSubmit = e => {
    e.preventDefault();
    firebase.auth.onAuthStateChanged(function(user) {
      firebase.db.collection('users').doc(user.uid).update({
        points: points
      });
    })

  }


  const AnswerButtonClick = (correct) => {
    if(correct===true){
      setPoints(points + 1);
      console.log(points);
      alert('Bonne réponse !');
      } else {
        alert('Mauvaise réponse !');
      }


  const nextQuestion = currentQuestion + 1;
      if(nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
  }
  
    return(
            
<div className="container">

  {showScore ? (
    <>
        <div className='score-box'>
         <h1>Vous avez {points} bonne réponse sur {questions.length}</h1>
         <p>Voulez-vous enregistrer votre score ?</p>
          <form onSubmit={handleSubmit}>
            <button style={{marginTop: "115px"}} className="Btn">Sauvegarder</button>
            <Link to="/"><button style={{marginTop: "180px"}} className="Btn">Retour au menu</button></Link>
          </form>
        </div>

        {/* <div className="claqueurdiv">
        <img src={claqueur} alt="claqueur" id="imgclaqueur"></img>
        </div> */}
    </>

  ) : (
  <>
  <div className="question-box">
      <h2>Question {currentQuestion}/{questions.length}</h2>
      <h2>{questions[currentQuestion].question}</h2>
  </div>
  <div className="answer-box">
  {questions[currentQuestion].answerOptions.map((answerOption) =>(
  <button className="answerbtn" id="answerbtn" onClick={() => AnswerButtonClick(answerOption.correct)}>{answerOption.text}</button>
  ))}
  </div>
  </>              
  )}
</div>
  )
 
} 