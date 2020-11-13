import React, { useState, useContext } from 'react';
import joel from './images/joel.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FirebaseContext } from './Firebase';
import { Link } from "react-router-dom";

  const Inscription = () => {

   
       const firebase = useContext(FirebaseContext) 

       const data = {
         email: '',
         pseudo: '',
         password: '',
         confirmPassword: ''
       }

       const [loginData, setLoginData] = useState(data)

       const [error, setError] = useState('')

       const handleChange = e => {
         setLoginData({...loginData, [e.target.id]: e.target.value})

       }

       const handleSubmit = e => {
         e.preventDefault();
         const { email, password } = loginData;
         firebase.signupUser(email, password)
         .then(user => {
             setLoginData({...data})
         })
         .catch(error => {
             setError(error)
             setLoginData({...data});
         })
       }
      
       const {email, pseudo, password, confirmPassword } = loginData;

      const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
       ? <button  className="Btn disabled" style={{marginTop: "220px", width: "250px"}} disabled>Inscription</button> : <button className="Btn" style={{marginTop: "220px", width: "250px"}}>Inscription</button>

      // ERRORS

      const errorMsg = error !== '' && <span className="error">{error.message}</span>

      return(

        <>

        <h2 style={{paddingTop: "35px"}}>Inscrivez-vous gratuitement</h2>
        <Container>
          <Row>
            <Col>
            {errorMsg}
        <div className="login-box">
            <form onSubmit={handleSubmit} style={{position: "relative", bottom: "70px"}}>
            <input onChange={handleChange} value={email} type="email" id="email" placeholder="Email" required></input>
            <br></br>
            <input onChange={handleChange} value={pseudo} type="text" id="pseudo" placeholder="Pseudo" required></input>
            <br></br>
            <input onChange={handleChange} value={password} type="password" id="password" placeholder="Mot de passe" required></input>
            <br></br>
            <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" placeholder="Confirmation mot de passe" required></input>
            {btn} 
            </form>
        </div>
        </Col>
        <Col>
        <div className="elliediv">
        <img src={joel} alt="joel" id="imgjoel"></img>
        </div>
        </Col>
        </Row>
        </Container>
        <Link to="/"><button className="Btn" style={{marginTop: "270px", width: "250px"}}>Retour au menu</button></Link>
        </>

      )
  }

  export default Inscription;