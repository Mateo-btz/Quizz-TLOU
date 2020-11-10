import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

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

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const AnswerButtonClick = (correct) => {
    if(correct===true){
      alert("Bonne réponse !");
      setScore(score + 1);
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
    <div className='score-box'>Vous avez {score} bonne réponse sur {questions.length}
    <Link to="/"><button className="goHomeBtn">Menu principal</button></Link>
    </div>
  ) : (
  <>
  <div className="question-box">
      <h2>Question {currentQuestion}/{questions.length}</h2>
      <h2>{questions[currentQuestion].question}</h2>
  </div>
  <div className="answer-box">
  {questions[currentQuestion].answerOptions.map((answerOption) =>(
  <button className="answerbtn" onClick={() => AnswerButtonClick(answerOption.correct)}>{answerOption.text}</button>
  ))}
      
  </div>
  </>              
  )};
</div>
  )
 
}
