import React from "react";
import { useEffect } from "react";
import { useViewport } from "../Util/CustomHooks";
import { useState } from "react";
import { getDiscoverSticker } from "../Util/Hygraph";

export function DiscoverSticker (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const [sticker, setSticker] = useState('');

    useEffect(()=>{
        getDiscoverSticker(setSticker);
    },[])

    return (
        <div>
        {width >= desktopBreakpoint ? <div className= 'discover-sticker-desktop' style={{backgroundImage: `url(${sticker})`}}></div> : width >= tabletBreakpoint ? <div className='discover-sticker-tablet' style={{backgroundImage: `url(${sticker})`}}></div> : null}
        </div>
    )
}