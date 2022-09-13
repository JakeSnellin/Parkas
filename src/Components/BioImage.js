import React, { useEffect, useState } from "react";
import { getBioImages } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";
import { DiscoverSticker } from "./DiscoverSticker";
import { ScrollSticker } from "./ScrollSticker";

export function BioImage (props){

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const [images, setImages] = useState(null);

    const { width } = useViewport();

    useEffect(()=>{
        getBioImages({
            variables: {
                slug: props.slug
            }},setImages);
    },[])

    if(!images){
        return null;
    }

    /* If the viewport is more narrow than the breakpoint render the
     mobile component, else render the desktop component */
    return (
        <div className="flex-container">
            {width >= desktopBreakpoint ?/* is desktop */ <div className="bio-image-desktop-container" style={{backgroundImage: `url(${images[2].url})`}}><DiscoverSticker /><ScrollSticker /></div> : width >= tabletBreakpoint ? /* is tablet */ <div className="bio-image-container" style={{backgroundImage: `url(${images[1].url})`}}><DiscoverSticker /><ScrollSticker /></div> : /* is mobile */ <div className="bio-image-container" style={{backgroundImage: `url(${images[0].url})`}}></div>}
        </div>
    )
}