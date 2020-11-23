import React, {useState, useEffect, useContext} from 'react';
import ellie from './images/ellie.png';
import { FirebaseContext } from './Firebase';
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";

  function Connexion(props) {

   const firebase = useContext(FirebaseContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {

      if (password.length > 5 && email !== '') {
        setBtn(true)
      } else if (btn) {
         setBtn(false)
      }

    }, [password, email, btn])

    const handleSubmit = e => {
      e.preventDefault();

      firebase.loginUser(email, password)
      .then(user => {
        console.log(user);
        setEmail('');
        setPassword('');
           props.history.push("/Profil");
          })
        .catch(error => {
          setError(error);
          setEmail('');
          setPassword('');
      })
      
    }



      return(
          <>
          <h2 style={{paddingTop: "100px"}}>Connectez-vous</h2>
          <Container id="login-container">
            <Row>
              <Col>
              {error !== '' && <span className="error">{error.message}</span>}
              <div className="login-box">
              <form onSubmit={handleSubmit}>
              <input onChange={e => setEmail(e.target.value)}  value={email} type="text" placeholder="Email" required></input>
              <br></br>
              <input onChange={e => setPassword(e.target.value)} value={password} type="password"  placeholder="mot de passe" required></input>
              {btn ? <button className="Btn" type="submit" style={{marginTop: "100px", width: "250px"}}>Connexion</button> : <button className="Btn disabled" style={{marginTop: "100px", width: "250px"}} disabled>Connexion</button>}
              <Link to="/"><button className="Btn" id="mobile-goHomeBtn" style={{marginTop: "160px", width: "250px"}}>Retour au menu</button></Link>
              </form>
              </div>
              </Col>
              <Col>
              <div className="joeldiv">
          <img src={ellie} alt="ellie" id="imgellie"></img>
          </div>
            </Col>
          </Row>
          </Container>
          <Link to="/"><button className="Btn" id="goHomeBtn" style={{marginTop: "262px", width: "250px"}}>Retour au menu</button></Link> 
          </>
      )
  }

export default Connexion;