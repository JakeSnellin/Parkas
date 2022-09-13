import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { getScrollSticker } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";

export function ScrollSticker (props){

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const [sticker, setSticker] = useState('');

    useEffect(()=>{
        getScrollSticker(setSticker);
    },[])

    return (
        <div>
            {width >= desktopBreakpoint ? <div className='scroll-sticker' style={{backgroundImage: `url(${sticker})`}}></div> : null}
        </div>
    )
}