import React from "react";
import { useViewport } from "../Util/CustomHooks";
import { getEyesGraphic } from "../Util/Hygraph";
import { useEffect } from "react";
import { useState } from "react";

export function EyesGraphic(props){

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const [backgroundUrl, setBackgroundUrl] = useState('');

    const backgroundStyles = {
        container: (url) => ({
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            listStyle: 'none',
            width: '100%',
            height: '912px',
        })
    }

    useEffect(()=>{
        getEyesGraphic(setBackgroundUrl);
    },[])

    return(
        
        width >= desktopBreakpoint ? <div style={backgroundStyles.container(backgroundUrl)}></div> : null
    )
}