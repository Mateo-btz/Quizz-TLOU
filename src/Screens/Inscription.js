import React, {useState, useContext} from 'react';
import joel from '../Assets/images/joel.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FirebaseContext } from '../Firebase';
import 'firebase/auth';
import ProfilePicChange from '../Components/ProfilPicChange';
import ellieAvatar from '../Assets/images/Avatars/ellie-face.jpg';
import joelAvatar from '../Assets/images/Avatars/joel-face.jpg';
import davidAvatar from '../Assets/images/Avatars/david-face.jpg';
import tessAvatar from '../Assets/images/Avatars/tess-face.jpg';
import levAvatar from '../Assets/images/Avatars/lev-face.jpg';
import abbyAvatar from '../Assets/images/Avatars/abby-face.jpg';
import jesseAvatar from '../Assets/images/Avatars/jesse-face.jpg';
import dinaAvatar from '../Assets/images/Avatars/dina-face.jpg';
import tommyAvatar from '../Assets/images/Avatars/tommy-face.jpg';
import billAvatar from '../Assets/images/Avatars/bill-face.jpg';
import samAvatar from '../Assets/images/Avatars/sam-face.jpg';
import henryAvatar from '../Assets/images/Avatars/henry-face.jpg';


  const Inscription = (props) => {

    const data = {
      email: '',
      pseudo: '',
      password: '',
      confirmPassword: ''
    }
    const firebase = useContext(FirebaseContext);
    const [error, setError] = useState('')
    const [loginData, setLoginData] = useState(data)
    const [profileImage, setProfileImage] = useState({})

    const handleChange = e => {
      setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  const handleImageChange = (profileImage) => {
  setProfileImage(profileImage);
  console.log(profileImage);
  }     
  
  const handleSubmit = e => {
    // uploadImage();
    e.preventDefault();
    firebase.auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
    firebase.storage.ref('users/' + auth.user.uid).put(profileImage).then(function () {
      console.log('Upload REUSSI');
        }).catch(error => {
        console.log(error.message);
        })
         })
         .then(() => {
          firebase.auth.onAuthStateChanged(function(user) {
            firebase.db.collection('users').doc(user.uid).set({
            email: user.email,
            pseudo: pseudo,
            points: 0   
            });           
            }); 
         })
          .then(() => {
              props.history.push("/Profil");
          })
         .catch(error => {
             setError(error)
         })
       }
      
      const {email, pseudo, password, confirmPassword } = loginData;

      const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
       ? <button  className="Btn disabled" style={{marginTop: "290px", width: "250px"}} disabled>Inscription</button> : <button className="Btn" style={{marginTop: "290px", width: "250px"}}>Inscription</button>

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
            <Avatar alt="logo" type="file" style={{marginLeft: "auto", marginRight: "auto", marginTop: "10px"}} id="avatar" src={profileImage} size={64} icon={<UserOutlined />} />
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
              <Link to="/"><button className="Btn" id="mobile-goHomeBtn" style={{marginTop: "350px", width: "240px",position: "absolute"}}>Retour au menu</button></Link>  {/* SE DISPLAY EN VERSION MOBILE*/}
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