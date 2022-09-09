import React, { useEffect } from "react"
import { useState } from "react";
import { getBioBackgroundTop } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";
import { BioTitle } from "./BioTitle";

export function BioBackgroundTop (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const [bioBackground, setBioBackground] = useState(null);

    useEffect(() =>{
        getBioBackgroundTop(setBioBackground);
    },[])

    if(!bioBackground){
        return null;
    }

    return (
        <div>
        {width > desktopBreakpoint ? <BioTitle name={props.name}/> : width >= mobileBreakpoint ? <div className="bio-background-top" style={{backgroundImage:  `url(${bioBackground[0].url})`}}><BioTitle name={props.name}/></div> : <div className="bio-background-top" style={{backgroundImage: `url(${bioBackground[1].url})`}}><BioTitle name={props.name}/></div>}
        </div>
    )
}