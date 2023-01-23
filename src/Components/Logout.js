import React, {useState, useEffect, useContext} from 'react';
import FirebaseContext from '../Firebase/context';
import '../Switch.css';
import 'firebase/auth';
import ReactToolTip from 'react-tooltip';

const Logout = (props) => {
  

    const [checked, setChecked] = useState(false);
    const firebase = useContext(FirebaseContext);
    useEffect(() => {
        if (checked) {
            firebase.auth.signOut();
        }

    }, [checked]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
      <>
      <input
          onChange={handleChange}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
      <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}

        >
      <span className={`react-switch-button`} data-tip="Déconnexion"></span>
      </label>
      <ReactToolTip
      place="left"
      effect="solid"
       />
      </>
      
    );
  };
  
  export default Logout;