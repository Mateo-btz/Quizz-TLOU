import React, {useState, useEffect, useContext} from 'react';
import ellie from '../Assets/images/ellie.png';
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";
import FirebaseContext from '../Firebase/context';


  function Connexion(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('')
    const firebase = useContext(FirebaseContext);

    useEffect(() => {

      if (password.length > 5 && email !== '') {
        setBtn(true)
      } else if (btn) {
         setBtn(false)
      }

    }, [password, email, btn])

    const handleSubmit = e => {
      e.preventDefault();
      firebase.auth.signInWithEmailAndPassword(email, password)
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
            <Container>
              <h2>Connectez-vous</h2>
            </Container>
            <Container id="login-container">
              <Row>
                  <Col>
                    {error !== '' && <span className="error">{error.message}</span>}
                    <div className="login-box">
                      <form onSubmit={handleSubmit}>
                        <label>
                          <input onChange={e => setEmail(e.target.value)}  value={email} type="text" placeholder="Email" required></input>
                        </label>
                        <label>
                          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="mot de passe" required></input>
                        </label>
                        {btn ? <button className="Btn btn-submit" type="submit">Connexion</button> : <button className="Btn btn-submit disabled" disabled>Connexion</button>}
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
            <Container>
              <Link to="/"><button className="Btn" id="goHomeBtn">Retour au menu</button></Link>
            </Container>
          </>
        )}

export default Connexion;