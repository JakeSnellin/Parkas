import React from "react";
import { useViewport } from "../Util/CustomHooks";


export function NewsSticker (props){

    const { width } = useViewport();

    const desktopBreakpoint = 1400;

    const linkStyles = {
        display: 'block',
        width: width >= desktopBreakpoint ? '229px' : '203.34px',
        height: width >= desktopBreakpoint ? '236px' : '210.19px'
    }

     const discoverStickerStyles = {
        backgroundImage: `url(${props.newsSticker})`,
        width: width >= desktopBreakpoint ? '229px' : '203.34px',
        height: width >= desktopBreakpoint ? '236px' : '210.19px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        transform: 'rotate(-60deg)',
        top: width >= desktopBreakpoint ? '-20px' : '1200px',
        right: width >= desktopBreakpoint ? '-60px' : '55px',
        zIndex: '2'
    }

    return (
        <div>
            {<div style={discoverStickerStyles}><a style={linkStyles} href="https://instagram.com/ParkasComedy" target="blank"></a></div>}
        </div>
    )
}