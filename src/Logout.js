import React, {useState, useEffect, useContext} from 'react';
import { FirebaseContext } from './Firebase';
import './Switch.css';

const Logout = () => {

    const firebase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    console.log(checked);

    useEffect(() => {
        if (checked) {
            console.log('déco');
            firebase.signoutUser();
        }

    }, [checked, firebase]);

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
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };
  
  export default Logout;