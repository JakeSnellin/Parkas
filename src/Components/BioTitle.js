import React from "react"
import { useViewport } from "../Util/CustomHooks";

export function BioTitle (props){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;
    
    return (
        width >= desktopBreakpoint ? <h1 className="title-desktop">{props.name.toUpperCase() + ' BIO'}</h1>: width >= tabletBreakpoint ? <h1 className="title-tablet-white">{props.name.toUpperCase() + ' BIO'}</h1> : <h1 className="title-mobile-white">{props.name.toUpperCase() + ' BIO'}</h1> 
    )
}