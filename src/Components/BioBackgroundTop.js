import React, { useEffect } from "react"
import { useState } from "react";
//import { getBioBackgroundTop } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";
import { BioTitle } from "./BioTitle";
import { SocialMediaLinks } from "./SocialMediaLinks";

export function BioBackgroundTop (props){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    /*const [bioBackground, setBioBackground] = useState(null);

    useEffect(() =>{
        getBioBackgroundTop(setBioBackground);
    },[])

    if(!bioBackground){
        return null;
    }*/
    
    const backgroundContainerStyles ={
        container: (url) => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: width >= tabletBreakpoint ? '512px' : '293px'
        })
    }

    return (

        <div style={width >= desktopBreakpoint ? null : width >= tabletBreakpoint ? backgroundContainerStyles.container(props.glassGraphic[0].url) : backgroundContainerStyles.container(props.glassGraphic[1].url)}>
            
            <div><BioTitle name={props.name}/><SocialMediaLinks socialMediaLinks={props.socialMediaLinks}/></div>

        </div>
    )
}