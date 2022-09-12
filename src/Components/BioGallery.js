import React from "react";
import { useViewport } from "../Util/CustomHooks";
import { useEffect } from "react";
import { useState } from "react";

export function BioGallery (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1200;

    /*const filterGalleryImages = (size) =>{
        setImages(props.galleryImages.filter((image) =>{
            return image.fileName.includes(size);
        }))
    }*/

    return(
        <div>
            {props.galleryImages.map((image, index)=>{
                return <div key={index} className="bio-gallery-container"><img src={image.url}></img></div>
            })}
        </div>
    )

}