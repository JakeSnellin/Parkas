import React from "react";
import { useViewport } from "../Util/CustomHooks";

export function BioGallery (props){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1200;

    const galleryContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: width >= desktopBreakpoint ? '144px' : width >= tabletBreakpoint ? '100px' : '39px'
    }

    return(
        <div style={galleryContainerStyles}>
            {props.galleryImages.map((image, index)=>{
                return <div key={index} className="bio-gallery-container"><img src={image.url} alt='gallery image'></img></div>
            })}
        </div>
    )

}