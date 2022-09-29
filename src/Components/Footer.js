import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useViewport } from '../Util/CustomHooks';

export function Footer (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

      const footerContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '38px',
        margin: width <= mobileBreakpoint ? '70px 0 12px 0' : '92px 0 20px 0',
        width: '100%',
      }

      const linkStyles = {
        fontSize: "1.75rem",
        color: "#333333",
        marginRight: "2rem",
      }

      const iconPairStyles = {
        display: 'flex',
        flexDirection: width <= mobileBreakpoint ? 'column' : 'row',
        gap: width <= mobileBreakpoint ? "38px" : '70px'
      }

      const captionContainerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: '1.25rem',
        fontSize: '0.75rem',
        alignItems: 'flex-end',
        fontSize: '10px',
        lineHeight: '13px'
      }

      const breakStyles = {
        display: width <= mobileBreakpoint ? 'block' : 'none'
      }

      const contactInfoStyles = {
        padding: '10px 0'
      }

      const siteCreditStyles = {
        maxWidth:'142px',
        textAlign: 'left',
        color: '#333333'
      }

      const captionStyles = {
        color: '#333333'
      }

      const graphicContainerStyles = {
        width: '100%',
        height: '82px'
      }

    return(
        <div>
            <div style={footerContainerStyles}>
              <div style={iconPairStyles}>
                <div className='icon-container' style={{backgroundImage: `url(${props.icon})`}}></div>
                    <div>
                        <a href='https://twitter.com/ParkasComedy' style={linkStyles} target="_blank"><FontAwesomeIcon icon={ faTwitter }/></a>
                        <a href='https://instagram.com/ParkasComedy' style={linkStyles} target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
                    </div>
                </div>
                <div>
                  <p style={contactInfoStyles}>hannah@parkascomedy.com</p>
                  <p style={contactInfoStyles}>07746011834</p>
                </div>
                <div style={captionContainerStyles}>
                <p style={siteCreditStyles}>Site created by Jake Snellin and Michael Julings</p><p style={captionStyles}>©2022 / Parkas / <br style={breakStyles}/> All rights reserved</p> 
                </div>
            </div>
        </div>
    )
}