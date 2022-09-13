import React from "react";
import { useEffect } from "react";
import { useViewport } from "../Util/CustomHooks";
import { useState } from "react";
import { getDiscoverSticker } from "../Util/Hygraph";

export function DiscoverSticker (props){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const [sticker, setSticker] = useState('');

    useEffect(()=>{
        getDiscoverSticker(setSticker);
    },[])

    const linkStyles = {
        display: 'block',
        height: '297px',
        width: '307px'
    }

    return (
        <div>
        {width >= desktopBreakpoint ? <div className= 'discover-sticker-desktop' style={{backgroundImage: `url(${sticker})`}}><a style={linkStyles} href="https://instagram.com/ParkasComedy" target="blank"></a></div> : width >= tabletBreakpoint ? <div className='discover-sticker-tablet' style={{backgroundImage: `url(${sticker})`}}><a style={linkStyles} href="https://instagram.com/ParkasComedy" target="blank"></a></div> : null}
        </div>
    )
}