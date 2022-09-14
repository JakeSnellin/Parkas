import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useViewport } from "../Util/CustomHooks";
import { useState } from 'react';
import { getlinksBackground } from '../Util/Hygraph';
import { useEffect } from 'react';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

export function SocialMediaLinks (props){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const [background, setBackground] = useState('');

    useEffect(()=>{
        getlinksBackground(setBackground);
    },[])

    const socialLinksContainer = {
        display: 'flex',
        flexDirection: 'row',
        gap: '1.625rem',
        alignItems: 'center',
        justifyContent: 'center',
        margin: width >= desktopBreakpoint ? '0 0 0 20px' : width >= tabletBreakpoint ? '0 0 59px 20px' : '0 0 95px 12px',
        backgroundImage: width > desktopBreakpoint ? `url(${background})` : null,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '428px',
        height: '197px'
    }

    const iconStyles = {
        fontSize: width >= desktopBreakpoint ? '3rem' : null,
        color: width >= desktopBreakpoint ? 'black' : 'white',
    }
    
    const socialIconTablet = {
        fontSize: '2.5rem',
        color: 'white',
        marginRight: '1.25rem'
    }
    
    const socialIconMobile = {
        fontSize: '30px',
        color: 'white',
        marginRight: '20px'
    }

    const linksInnerContainer = {
        transform: 'translate(-10deg)'
    }



    const socialLinks = () => {
        if (props.socialMediaLinks.length > 0){
            return props.socialMediaLinks.map((item, index) => {
                if(item.includes("twitter")){
                    return <a href={item}  key={index} target="_blank" style={iconStyles}><FontAwesomeIcon icon={ faTwitter }/></a>;
                }
                if(item.includes("facebook")){
                    return <a href={item} key={index} target="_blank" style={iconStyles}><FontAwesomeIcon icon={ faFacebook }/></a>;
                }
                if(item.includes("instagram")){
                    return <a href={item} key={index} target="_blank" style={iconStyles}><FontAwesomeIcon icon={ faInstagram }/></a>;
                }
            })
        }
    }

    return (
        <div style={socialLinksContainer}>
                {socialLinks()}
        </div>
    )
}