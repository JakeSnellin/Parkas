import React from "react";
import { getTabletGraphic } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";
import React, { useState } from "react";
import {useEffect} from "react";

export function BackgroundGraphic (props){

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const [background, setBackground] = useState('');

    useEffect(()=>{
        getTabletGraphic(setBackground);
    },[])

    return (
        
        <div>
            {width >= desktopBreakpoint ? <div style={{backgroundImage: `url(${background})`}}></div> : null}
        </div>
    )   
}