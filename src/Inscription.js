import React, { useState, useContext } from 'react';
import joel from './images/joel.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FirebaseContext } from './Firebase';
import { Link } from "react-router-dom";
import 'firebase/auth';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProfilePicChange from './ProfilPicChange';
import ellieAvatar from './images/Avatars/ellie-face.jpg';
import joelAvatar from './images/Avatars/joel-face.jpg';
import davidAvatar from './images/Avatars/david-face.jpg';
import tessAvatar from './images/Avatars/tess-face.jpg';
import levAvatar from './images/Avatars/lev-face.jpg';
import abbyAvatar from './images/Avatars/abby-face.jpg';
import jesseAvatar from './images/Avatars/jesse-face.jpg';
import dinaAvatar from './images/Avatars/dina-face.jpg';
import tommyAvatar from './images/Avatars/tommy-face.jpg';
import billAvatar from './images/Avatars/bill-face.jpg';
import samAvatar from './images/Avatars/sam-face.jpg';
import henryAvatar from './images/Avatars/henry-face.jpg';
import app from 'firebase/app';

  const Inscription = (props) => {

   
       const firebase = useContext(FirebaseContext) 
       var storage = app.storage();



       const data = {
         email: '',
         pseudo: '',
         password: '',
         confirmPassword: ''
       }

       const [error, setError] = useState('')

       const [loginData, setLoginData] = useState(data)

       const [profileImage, setProfileImage] = useState({})

       const handleChange = e => {
         setLoginData({...loginData, [e.target.id]: e.target.value})

       }

       const handleImageChange = (profileImage) => {
        setProfileImage(profileImage)
        }


       const handleSubmit = e => {
         e.preventDefault();
         const { email, password, pseudo,  } = loginData;
         firebase.auth.createUserWithEmailAndPassword(email, password)
         .then(auth => {
          storage.ref('users/' + auth.user.uid + '/profile.jpg').put(profileImage).then(function () {
            console.log('Upload REUSSI');
            return firebase.user(auth.user.uid).set({
              pseudo,
              email,
        })

        }).catch(error => {
            console.log(error.message);
        })
         })
         .then(() => {
             setLoginData({...data});
             props.history.push("/Profil");
         })
         .catch(error => {
             setError(error)
             setLoginData({...data});
         })
       }
      
       const {email, pseudo, password, confirmPassword } = loginData;

      const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
       ? <button  className="Btn disabled" style={{marginTop: "270px", width: "250px"}} disabled>Inscription</button> : <button className="Btn" style={{marginTop: "270px", width: "250px"}}>Inscription</button>

      // ERRORS

      const errorMsg = error !== '' && <span className="error">{error.message}</span>

      return(

<>

  <h2 style={{paddingTop: "100px", width: "90%", marginLeft: "auto", marginRight: "auto"}}>Inscrivez-vous gratuitement</h2>
  <Container id="login-container">
    <Row>
        <Col>
          {errorMsg}
          <div className="login-box">
            {/* <button className="menuBtn" style={{marginLeft: "auto", marginRight: "auto"}}>Sauvegarder</button>   */}
            <form onSubmit={handleSubmit} style={{position: "relative", bottom: "70px"}}>
            <Avatar type="file" style={{marginLeft: "auto", marginRight: "auto", marginTop: "10px"}} id="avatar" src={profileImage} size={64} icon={<UserOutlined />} />
            <ProfilePicChange handleImageChange={handleImageChange} pic1={ellieAvatar} pic2={joelAvatar} pic3={tommyAvatar} pic4={abbyAvatar} pic5={jesseAvatar}
                              pic6={levAvatar} pic7={billAvatar} pic8={dinaAvatar} pic9={samAvatar} pic10={henryAvatar} pic11={tessAvatar} pic12={davidAvatar}
            />
                  
                    <input onChange={handleChange} value={email} type="email" id="email" placeholder="Email" required></input>
                    <br></br>
                    <input onChange={handleChange} value={pseudo} type="text" id="pseudo" placeholder="Pseudo" required></input>
                    <br></br>
                    <input onChange={handleChange} value={password} type="password" id="password" placeholder="Mot de passe" required></input>
                    <br></br>
                    <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" placeholder="Confirmation mot de passe" required></input>
              {btn} 
              <Link to="/"><button className="Btn" id="mobile-goHomeBtn" style={{marginTop: "330px", width: "240px",position: "absolute"}}>Retour au menu</button></Link>  {/* SE DISPLAY EN VERSION MOBILE*/}
              <br></br>
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
  <Link to="/"><button className="Btn" id="goHomeBtn" style={{marginTop: "270px", width: "250px"}}>Retour au menu</button></Link>{/* SE DISPLAY EN VERSION DESKTOP*/}
</>

      )
  }

  export default Inscription;