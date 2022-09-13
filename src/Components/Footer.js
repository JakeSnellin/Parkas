import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useViewport } from '../Util/CustomHooks';

export function Footer (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

      const galleryStyles = {
        display: 'flex',
        flexDirection: width <= mobileBreakpoint ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: width <= mobileBreakpoint ? '59px' : null,
        margin: width <= mobileBreakpoint ? '70px 0 20px 0' : '92px 0 20px 0',
        width: '100%',
      }

      const linkStyles = {
        fontSize: "2rem",
        color: "black",
        marginRight: "2rem",
      }

      const iconPairStyles = {
        display: 'flex',
        flexDirection: width <= mobileBreakpoint ? 'column' : 'row',
        gap: width <= mobileBreakpoint ? "59px" : '70px'
      }

    return(
        <div>
            <div style={galleryStyles}>
              <div style={iconPairStyles}>
                <div className='icon-container' style={{backgroundImage: `url(${props.icon})`}}></div>
                    <div>
                        <a href='https://twitter.com/ParkasComedy' style={linkStyles} target="_blank"><FontAwesomeIcon icon={ faTwitter }/></a>
                        <a href='https://instagram.com/ParkasComedy' style={linkStyles} target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
                    </div>
                </div>
                <p>©2022 / Parkas / <br />
                    All rights reserved</p>
            </div>
        </div>
    )
}