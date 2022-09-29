import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../App/App.css';


export function Header (props){

    return(
        <div>
            <div className="home-icon-container">
                <a href='https://twitter.com/ParkasComedy' className="twitter-icon-home" target="_blank"><FontAwesomeIcon icon={ faTwitter }/></a>
                <a href='https://instagram.com/ParkasComedy' className="insta-icon-home" target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
            </div>
            <div className='logo-container' style={{backgroundImage: `url(${props.logo})`}}></div>
        </div>
    )
}