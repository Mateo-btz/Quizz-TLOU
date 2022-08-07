import React, {useState, setState, Fragment, useContext, useEffect} from 'react';
import Logout from '../Components/Logout';
import Loader from '../Components/Loader';
import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import "antd/dist/antd.css";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
import { FirebaseContext } from '../Firebase';

    const Profil = (props) => {
    

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [profileImage, setProfileImage] = useState('');
    const [userData, setUserData] = useState({});
    const [url, setUrl] = useState("");
    const [user,setUser]=useState();
    
  
    const handleImageChange = (profileImage) => {
        setProfileImage(profileImage)
    }

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
    }, [userSession]);
    

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

    


  return userSession === null ? ( <Loader />) : (
        

<div className="profil-box">
  <Container id="logout-container">{/* NE SE VOIT PAS EN VERSION MOBILE */}
    <div className="logout-box">
      <Logout/>
    </div>
  </Container>


<Container id="profil-container">
    <div className="logout-box-mobile">
        <Logout /> {/*  SE DISPLAY EN VERSION MOBILE */}
        <p className="deco-mobile">Déconnexion</p>
        <br></br>
        <br></br>
    </div>

    <h2 style={{color: "white"}}>Survivant {userData.pseudo}</h2>
    <Avatar style={{marginLeft: "auto", marginRight: "auto", marginTop: "10px"}} id="avatar" src={profileImage} size={64} icon={<UserOutlined />} />
    <ProfilePicChange handleImageChange={handleImageChange} pic1={ellieAvatar} pic2={joelAvatar} pic3={tommyAvatar} pic4={abbyAvatar} pic5={jesseAvatar}
                                                            pic6={levAvatar} pic7={billAvatar} pic8={dinaAvatar} pic9={samAvatar} pic10={henryAvatar} pic11={tessAvatar} pic12={davidAvatar}
    />
    <h2 style={{color: "white"}}>Meilleur score actuel : {userData.points}</h2>
</Container>

    <Link to="/"><button className="Btn" style={{marginTop: "270px", width: "250px"}}>Retour au menu</button></Link>
</div>


    )
}


export default Profil;