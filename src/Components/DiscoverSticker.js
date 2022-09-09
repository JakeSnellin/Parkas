import React from "react";
import { useEffect } from "react";
import { useViewport } from "../Util/CustomHooks";
import { useState } from "react";
import { getDiscoverSticker } from "../Util/Hygraph";

export function DiscoverSticker (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1200;

    const [sticker, setSticker] = useState('');

    const tabletClasses = `discover-sticker-tablet discover-sticker`;

    const desktopClasses = `discover-sticker-desktop discover-sticker`;

    useEffect(()=>{
        getDiscoverSticker(setSticker);
    },[])

    return (
        <div>
        {console.log(sticker)}
        {width > tabletBreakpoint && width < desktopBreakpoint ? <div className={tabletClasses} style={{backgroundImage: `url(${sticker})`}}></div> : width >= desktopBreakpoint ? <div className={desktopClasses} style={{backgroundImage: `url(${sticker})`}}></div> : null}
        </div>
    )
}