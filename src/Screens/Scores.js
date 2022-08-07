import { Result } from 'antd';
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import {useContext} from 'react';
import { FirebaseContext } from '../Firebase';



function Scores() {
  var i = 1;
  const firebase = useContext(FirebaseContext);
  const [allUsers, setUsers] = useState([]);
  firebase.db.collection("users")
  .orderBy('points', 'desc')
  .onSnapshot(docs => {
  let users = [];
  docs.forEach(doc => {
    users.push(doc.data())
  })
  setUsers(users);
  })
    return(

    <>
          <table className="table table-striped hide" id="table"> 
          <>
            <thead className="text-black bg-white">
                <tr>
                  <th>Classement</th>
                  <th>Pseudo</th>
                  <th>Score</th>
                </tr>
            </thead>
              <tbody>
            {allUsers.map(user =>
                <tr>
                  <td>{i++}</td>
                  <td>{user.pseudo}</td>
                  <td>{user.points}</td> 
                </tr>
              )}
            </tbody> 
            <Link to="/"><button style={{marginTop: "400px"}} variant="primary" className="Btn">Retour</button></Link>
          </>
          </table>
          </>


    )
    
}
export default Scores;