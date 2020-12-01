import React, {useState, Fragment, useContext, useEffect} from 'react';
import Firebase, { FirebaseContext } from './Firebase';
import Logout from './Logout';
import Loader from './Loader';
import app from 'firebase/app';
import  storage  from './Firebase';
import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import "antd/dist/antd.css";
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










    const Profil = (props) => {



    const firebase = useContext(FirebaseContext);

     const [userSession, setUserSession] = useState(null);
     const [userData, setUserData] = useState({})
     const [profileImage, setProfileImage] = useState('')
     const [url, setUrl] = useState("");
    //  var storage = app.storage();
    //  var auth = app.auth();






     const handleImageChange = (profileImage) => {
        setProfileImage(profileImage)
        }


         


        
        

    // const handleUpload = () => {
    //     const uploadTask = storage.ref(`Avatars/${profileImage.name}`).put(profileImage);
    //     uploadTask.on(
    //         "state_changed",
    //         snapshot => {},
    //         error => {
    //             console.log(error);
    //         },
    //         () => {
    //             storage
    //             .ref("Avatars")
    //             .getDownloadURL()
    //             .then(url => {
    //                 console.log(url);
    //                 setUrl(url)
    //             });
    //         }
    //     );
    // };




    useEffect(() => {

       let listener =  firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        })
    

        if (!!userSession) {
            firebase.user(userSession.uid)
            .get()
            .then( doc => {
                 if (doc && doc.exists) {
                     const myData = doc.data()
                     setUserData(myData)
                 }
            })
            .catch( error => {
                console.log(error)
            })
        }
        return () => {
            listener()

        };
    }, [userSession])


  return userSession === null ? (
       <Loader />
    ) : (

<div className="profil-box">
  <Container id="logout-container">{/* NE SE VOIT PAS EN VERSION MOBILE */}
    <div className="logout-box">
      <Logout userData={userData} />
    </div>
  </Container>

<Container id="profil-container">
    <div className="logout-box-mobile">
        <Logout userData={userData} /> {/*  SE DISPLAY EN VERSION MOBILE */}
        <p className="deco-mobile">Déconnexion</p>
        <br></br>
        <br></br>
    </div>

    <h2 style={{color: "white"}}>Survivant {userData.pseudo}</h2>
    <Avatar style={{marginLeft: "auto", marginRight: "auto", marginTop: "10px"}} id="avatar" src={profileImage} size={64} icon={<UserOutlined />} />
    <ProfilePicChange handleImageChange={handleImageChange} pic1={ellieAvatar} pic2={joelAvatar} pic3={tommyAvatar} pic4={abbyAvatar} pic5={jesseAvatar}
                                                            pic6={levAvatar} pic7={billAvatar} pic8={dinaAvatar} pic9={samAvatar} pic10={henryAvatar} pic11={tessAvatar} pic12={davidAvatar}
    />
    <h2 style={{color: "white"}}>Meilleur score actuel : 5</h2>
</Container>
    <Link to="/"><button className="Btn" style={{marginTop: "270px", width: "250px"}}>Retour au menu</button></Link>
</div>


    )
}


export default Profil;