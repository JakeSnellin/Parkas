
import React, { useState, useRef } from "react";
import { useEffect } from 'react';
import ReactDOM from 'react-dom'
import './Reset.css';
import './App.css';
import { HomePage } from '../Components/HomePage';
import { Bio } from '../Components/Bio';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Header } from '../Components/Header';
import { getIcon, getCloseButton, getLogo, getHeaderGraphic, getArtistUrls } from "../Util/Hygraph";
import { ViewportProvider } from "../Util/CustomHooks";


function App() {

  const [logo, setLogo] = useState('');

  const [icon, setIcon] = useState('');
  
  const [closeButton, setCloseButton] = useState(''); //change this to an array of assets?

  const [headerGraphics, setHeaderGraphics] = useState([]);

  useEffect(() =>{
    getLogo(setLogo);
    getIcon(setIcon);
    getCloseButton(setCloseButton);
    getHeaderGraphic(setHeaderGraphics);
  },[])

if(!logo){
  return null;
}

  return (
    <ViewportProvider>
    <div>
      <Router>
        <div className='wrapper'>
          <Switch>
            <Route path="/:slug"><Bio closeButton={closeButton} headerGraphics={headerGraphics}/></Route>
            <Route path="/"><HomePage logo={logo} icon={icon}/></Route>
          </Switch>
        </div>
      </Router>
    </div>
    </ViewportProvider>
  );
}

export default App;
