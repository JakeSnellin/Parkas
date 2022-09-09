import React from "react"
import { useViewport } from "../Util/CustomHooks";
import { useState } from "react";

export function BioTitle (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;
    
    return (
        width >= desktopBreakpoint ? <div><h1 className="title-desktop">{props.name}</h1></div> : width >= mobileBreakpoint ? <div><h1 className="title-tablet-white">{props.name}</h1></div> : <div><h1 className="title-mobile-white">{props.name}</h1></div> 
    )
}