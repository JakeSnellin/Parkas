import { Link } from "react-router-dom"
import React from "react"
import { useViewport } from "../Util/CustomHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export function BioHeader (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const desktopBreakpoint = 1440;

    const bioHeaderContainerStyles = {
            width: '100%',
            display: 'flex',
            height: width >= desktopBreakpoint ?  '63px' : '50px',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '16px 20px'
    }

    const instaIconLink = {
        fontSize: '26px',
        display: 'block',
        height: '100%',
        width: '100%',
        color: '#000000'
    }

    const closeButtonStyles = {
        backgroundImage:  `url(${props.closeButton})`,
        width: '2.625rem',
        height: '2.625rem',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'block',
    }

    return(
        <div>
            <div>
                {width <= mobileBreakpoint ? <div className="bio-header-graphic-mobile" style={{backgroundImage: `url(${props.headerGraphics[0].url})`}}>
                    <Link to="/" className="close-button-container-mobile" style={{backgroundImage: `url(${props.closeButton})`}}></Link>
                </div> : <div style={bioHeaderContainerStyles}>
                    <Link to="/" style={closeButtonStyles}></Link>
                    <div>
                    <a style={instaIconLink}href='https://instagram.com/ParkasComedy' target="_blank"><FontAwesomeIcon icon={ faInstagram }/></a>
                </div>
                </div>}
            </div>
        </div>
    )
}