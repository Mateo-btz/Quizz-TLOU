import React from 'react';
import Music from './Components/Music';
import Rules from './Screens/Rules';
import Scores from './Screens/Scores';
import Home from './Screens/Home';
import Questions from './Screens/Questions';
import Connexion from './Screens/Connexion';
import Inscription from './Screens/Inscription';
import Profil from './Screens/Profil';
import Nav from './Components/Nav';
import {Route, Switch, Redirect } from "react-router-dom";





function App()  {

  
  return (
    

<div className="App">
  <Music />
  <Nav />
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/Questions" component={Questions}></Route>
    <Route exact path="/Connexion" component={Connexion}></Route>
    <Route exact path="/Inscription" component={Inscription}></Route>
    <Route exact path="/Scores" component={Scores}></Route>
    <Route exact path="/Rules" component={Rules}></Route>
    <Route exact path="/Profil" component={Profil}></Route>
    <Redirect from="/" to="/Home"/>
  </Switch>
</div>
  )
 }

export default App;