import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useViewport } from '../Util/CustomHooks';

export function Footer (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

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
        lineHeight: '1rem',
        alignItems: 'flex-end',
        fontSize: width <= tabletBreakpoint ? '10px' : '12px',
      }

      const breakStyles = {
        display: width <= mobileBreakpoint ? 'block' : 'none'
      }

      const contactInfoStyles = {
        color: '#333333',
        padding: '10px 0'
      }

      const siteCreditStyles = {
        maxWidth: width <= tabletBreakpoint ? '142px' : '162px',
        textAlign: 'left',
        color: '#333333',
      }

      const captionStyles = {
        color: '#333333'
      }

      const emailStyles = {
        textDecoration: 'none',
        color: '#333333'
      }

    return(
        <div>
            <div style={footerContainerStyles}>
              <div style={iconPairStyles}>
                <div className='icon-container' style={{backgroundImage: `url(${props.icon})`}}></div>
                    <div>
                        <a href='https://twitter.com/ParkasComedy' style={linkStyles} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={ faTwitter }/></a>
                        <a href='https://instagram.com/ParkasComedy' style={linkStyles} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={ faInstagram }/></a>
                    </div>
                </div>
                <div>
                  <p style={contactInfoStyles}><a style={emailStyles} href="mailto:hannah@parkascomedy.com">hannah@parkascomedy.com</a></p>
                  <p style={contactInfoStyles}>07746011834</p>
                </div>
                <div style={captionContainerStyles}>
                <p style={siteCreditStyles}>Site created by <a style={emailStyles} href="mailto:jake_snellin@hotmail.co.uk">Jake Snellin</a> and <a style={emailStyles} href="mailto:michael@julings.com">Michael Julings</a></p><p style={captionStyles}>©2022 / Parkas / <br style={breakStyles}/> All rights reserved</p> 
                </div>
            </div>
        </div>
    )
}