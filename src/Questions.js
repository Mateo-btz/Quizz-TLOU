import React, { Component, useState } from 'react';
import claqueur from './images/claqueur.png';
import { Link } from "react-router-dom";

export default function Questions(props) {
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
      { text: 'Une balle de Baseball dédicassée', correct: false},
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
  ]

  // const { pseudo }  = loginData.pseudo;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);



   const saveHighScore = () => {
   var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
   highScores.push(score);
   localStorage.setItem("highScores", JSON.stringify(highScores));
   console.log(highScores);
   }



  const AnswerButtonClick = (correct) => {
    if(correct===true){
      setScore(score + 1);
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
        <h1>Vous avez {score} bonne réponse sur {questions.length}</h1>
          <p>Voulez-vous enregistrer votre score ?</p>
          <form>
          <button className="Btn" type="submit" onClick={() => saveHighScore(score)}>Sauvegarder</button>
        </form>
        </div>

        <div className="claqueurdiv">
        <img src={claqueur} alt="claqueur" id="imgclaqueur"></img>
        </div>
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
