import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useViewport } from "../Util/CustomHooks";

export function SocialMediaLinks (props){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;
    
    const mobileClasses = `social-icon-mobile`;

    const tabletClasses = `social-icon-tablet`;

    const desktopClasses = 'social-icon-desktop';

    const socialLinksContainer = {
        margin: width >= desktopBreakpoint ? '0 0 0 20px' : width >= tabletBreakpoint ? '0 0 59px 20px' : '0 0 95px 12px'
    }

    const socialLinks = () => {
        if (props.socialMediaLinks.length > 0){
            return props.socialMediaLinks.map((item, index) => {
                if(item.includes("twitter")){
                    return <a href={item}  key={index} target="_blank"  className={width >= desktopBreakpoint ? desktopClasses : width >= tabletBreakpoint ? tabletClasses : mobileClasses }><FontAwesomeIcon icon={ faTwitter }/></a>;
                }
                if(item.includes("facebook")){
                    return <a href={item} key={index} target="_blank" className={width >= desktopBreakpoint ? desktopClasses : width >= tabletBreakpoint ? tabletClasses : mobileClasses }><FontAwesomeIcon icon={ faFacebook }/></a>;
                }
                if(item.includes("instagram")){
                    return <a href={item} key={index} target="_blank" className={width >= desktopBreakpoint ? desktopClasses : width >= tabletBreakpoint ? tabletClasses : mobileClasses }><FontAwesomeIcon icon={ faInstagram }/></a>;
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