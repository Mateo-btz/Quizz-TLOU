import { Result } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";


function Scores() {

// highScores = (highScores) ? JSON.parse(highScores) : [];
//     const titles = Object.keys(highScores[0]);

var highScores = JSON.parse(localStorage.getItem("highScores")) || new Array(10);
const titles = Object.keys(highScores[0])


    return(

    <>
          <table className="table table-striped hide" id="table">
              <thead className="text-black bg-white">
                  <tr>
                      {titles.map((title, key) =>(
                          <th key={key}>{title}</th>
                      ))}
                  </tr>
              </thead>
               <tbody>
                  {highScores.map((items, i) =>
                  <tr key={i}>
                      {(Object.values(highScores[i])).map((value, key) => (
                          <td key={key}>{value}</td> 
                      ))}
                  </tr>
                  )}
              </tbody> 
          </table>
          <Link to="/"><button id="scoreHomeBtn" variant="primary" className="Btn">Retour</button></Link>
          </>


    )
    
}
export default Scores;