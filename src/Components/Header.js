import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { getLogo } from '../Util/Hygraph';
import { useEffect } from 'react';
import '../App/App.css';


export function Header (props){

    return(
        <div>
            <div>
                <a href='#' target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
            </div>
            <div className='logo-container' style={{backgroundImage: `url(${props.logo})`}}></div>
        </div>
    )
}