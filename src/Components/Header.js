import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../App/App.css';


export function Header (props){

    return(
        <div>
            <div className="home-insta-icon-container">
                <a href='https://instagram.com/ParkasComedy' className="insta-icon-home" target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
            </div>
            <div className='logo-container' style={{backgroundImage: `url(${props.logo})`}}></div>
        </div>
    )
}