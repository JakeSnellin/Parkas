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
        gap: width >= desktopBreakpoint ? '1.625rem' : '1.5rem',
        alignItems: 'center',
        justifyContent: width >= desktopBreakpoint ? 'center' : 'flex-start',
        padding: width >= desktopBreakpoint ? null : '0 20px',
        backgroundImage: width > desktopBreakpoint ? `url(${background})` : null,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: width >= desktopBreakpoint ? '428px' : 'auto',
        height: width >= desktopBreakpoint ? '197px' : '2.5rem'
    }

    const iconStyles = {
        fontSize: width >= desktopBreakpoint ? '3rem' : width >= tabletBreakpoint ? '2.5rem' : '2rem',
        color: width >= desktopBreakpoint ? 'black' : 'white',
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