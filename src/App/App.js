
import React, { useState, useRef } from "react";
import { useEffect } from 'react';
import ReactDOM from 'react-dom'
import './Reset.css';
import './App.css';
import { HomePage } from '../Components/HomePage';
import { Bio } from '../Components/Bio';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Header } from '../Components/Header';
import { getLogo } from '../Util/Hygraph';
import { getArtistUrls } from '../Util/Hygraph';


function App() {

  const [logo, setLogo] = useState('');

  useEffect(() =>{
    getLogo(setLogo);
  },[])

if(!logo){
  return null;
}

  return (
    <div>
      <Router>
        <div className='wrapper'>
          <Switch>
            <Route path="/:slug"><Bio /></Route>
            <Route path="/"><HomePage logo={logo}/></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
