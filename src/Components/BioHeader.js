import { Link } from "react-router-dom"
import React from "react"
import { useViewport } from "../Util/CustomHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export function BioHeader (props){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1440;

    const bioHeaderContainerStyles = {
        width: '100%',
        display: 'flex',
        height: width >= desktopBreakpoint ? '63px' :  width >= tabletBreakpoint ? '50px' : '40px',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: width >= desktopBreakpoint ? '20px' : width > tabletBreakpoint ? '12px' : '6px',
        padding: width >= tabletBreakpoint ? '10.5px 20px' : '8px 12px'
    }

    const iconLink = {
        fontSize: width >= desktopBreakpoint ? '26px' : '20px',
        display: 'block',
        height: '100%',
        width: '100%',
        color: '#000000'
    }

    const closeButtonStyles = {
        backgroundImage:  `url(${props.closeButton})`,
        width: width >= desktopBreakpoint ? '2.625rem' :  width >= tabletBreakpoint ? '1.875rem' : '1.5rem',
        height: width >= desktopBreakpoint ? '2.625rem' : '1.875rem',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'block',
    }

    const iconContainerStyles = {
        display: 'flex'
    }

    return(
        <div>
            <div>
                <div style={bioHeaderContainerStyles}>
                    <Link to="/" style={closeButtonStyles}></Link>
                    <div style={iconContainerStyles}>
                        <a className="twitter-icon-bio" style={iconLink}href='https://twitter.com/ParkasComedy' target="_blank"><FontAwesomeIcon icon={ faTwitter }/></a>
                        <a style={iconLink}href='https://instagram.com/ParkasComedy' target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}