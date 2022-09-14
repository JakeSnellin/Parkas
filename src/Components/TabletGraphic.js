import React from "react";
import { getTabletGraphic } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";
import { useState } from "react";
import {useEffect} from "react";

export function TabletGraphic (props){

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const [background, setBackground] = useState('');

    useEffect(()=>{
        getTabletGraphic(setBackground);
    },[])

    const imageStyles = {
        container: (url) => ({
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            paddingTop: '100%'
        })
    }

    return (
        <div>
            {width >= tabletBreakpoint && width < desktopBreakpoint ? <div style={imageStyles.container(background)}></div> : null}
        </div>
    )   
}