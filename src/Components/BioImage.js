import React, { useEffect, useState } from "react";
import { getBioImages } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";

export function BioImage (props){

     // The width below which the mobile view should be rendered
    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1200;

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
        <div>
            {width > tabletBreakpoint ?/* is desktop */ <div className="bio-image-container" style={{backgroundImage: `url(${images[2].url})`}}></div> : width > mobileBreakpoint && width <= tabletBreakpoint ? /* is tablet */ <div className="bio-image-container" style={{backgroundImage: `url(${images[1].url})`}}></div> : /* is mobile */ <div className="bio-image-container" style={{backgroundImage: `url(${images[0].url})`}}></div>}
        </div>
    )
}