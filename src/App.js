import React, { useState } from 'react';
import Music from './Music';
import Rules from './Rules';
import Scores from './Scores';
import Home from './Home';
import Questions from './Questions';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Nav from './Nav';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";




function App()  {

  
  return (
    

<div className="App">
<Music />
<Nav />
{/* <Route render={({location}) => (
<TransitionGroup>
<CSSTransition
  key={location.key}
  timeout={450}
  classNames="fade"

> */}
<Switch>
<Route exact path="/" component={Home}></Route>
<Route exact path="/Questions" component={Questions}></Route>
<Route exact path="/Connexion" component={Connexion}></Route>
<Route exact path="/Inscription" component={Inscription}></Route>
<Route exact path="/Scores" component={Scores}></Route>
<Route exact path="/Rules" component={Rules}></Route>
<Redirect from="/" to="/Home"/>
</Switch>
{/* </CSSTransition>
</TransitionGroup>
)} /> */}
</div>
  )
 }

export default App;