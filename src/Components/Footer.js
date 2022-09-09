import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export function Footer (props){

    return(
        <div>
            <div>
                <div className='icon-container' style={{backgroundImage: `url(${props.icon})`}}></div>
                <a href='#' target="_blank"><FontAwesomeIcon icon={ faTwitter }/></a>
                <a href='#' target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
                <a href='#' target="_blank"><FontAwesomeIcon icon={ faFacebook }/></a>
                <p>©2022 / Parkas / <br />
                    All rights reserved</p>
            </div>
        </div>
    )
}