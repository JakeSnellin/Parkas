import React from "react"
import { getBackgroundGraphic } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";
import { useState } from "react";
import { useEffect } from "react";

export function BackgroundGraphic (props){

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const [background, setBackground] = useState('');

    useEffect(()=>{
        getBackgroundGraphic(setBackground);
    },[])

    return (
        
        <div>
            {width >= desktopBreakpoint ? <div className='background-graphic' style={{backgroundImage: `url(${background})`}}></div> : null}
        </div>
    )   
}