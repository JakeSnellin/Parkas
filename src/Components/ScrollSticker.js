import React from "react"
import { useViewport } from "../Util/CustomHooks";

export function ScrollSticker (props){

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    return (
        <div>
            {width >= desktopBreakpoint ? <div className='scroll-sticker' style={{backgroundImage: `url(${props.scrollSticker})`}}></div> : null}
        </div>
    )
}