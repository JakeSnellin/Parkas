
import React, { useState, useRef } from "react";
import { useEffect } from 'react';
import './Reset.css';
import './App.css';
import { HomePage } from '../Components/HomePage';
import { Bio } from '../Components/Bio';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { getIcon, getCloseButton, getLogo } from "../Util/Hygraph";
import { ViewportProvider } from "../Util/CustomHooks";
import lottie from "lottie-web";
import { CSSTransition, TransitionGroup } from "react-transition-group";



function App() {

  const [logo, setLogo] = useState('');

  const [icon, setIcon] = useState('');
  
  const [closeButton, setCloseButton] = useState(''); //change this to an array of assets?

  //const [headerGraphics, setHeaderGraphics] = useState([]);

  useEffect(() =>{
    getLogo(setLogo);
    getIcon(setIcon);
    getCloseButton(setCloseButton);
    //getHeaderGraphic(setHeaderGraphics);
  },[])

if(!logo){
  return null;
}

  return (
    <ViewportProvider>
    <div>
      <Router>
        <Route render={({location})=>(
          <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
              <Route path="/:slug"><Bio closeButton={closeButton} icon={icon}/></Route>
              <Route path="/"><HomePage logo={logo} icon={icon}/></Route>
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </Router>
    </div>
    </ViewportProvider>
  );
}

export default App;
