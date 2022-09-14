import React, { useEffect, useState } from "react";
import { getBioImages } from "../Util/Hygraph";
import { useViewport } from "../Util/CustomHooks";
import { DiscoverSticker } from "./DiscoverSticker";
import { ScrollSticker } from "./ScrollSticker";

export function BioImage (props){

    const mobileBreakpoint = 576;

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

    const bioImageContainer = {
        backgroundImage: width >= desktopBreakpoint ? `url(${images[2].url})` : width >= tabletBreakpoint ? `url(${images[1].url})` : `url(${images[0].url})`,
        width: width >= desktopBreakpoint ? '805px' :  '100%',
        height: width >= desktopBreakpoint ? '604px' : null,
        paddingTop: width >= desktopBreakpoint ? null : 'calc(3 / 4 * 100%)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        marginLeft: width >= desktopBreakpoint ? '30px' : null
    }

    const imageFlexContainer = {
            display: 'flex',
            width: '100%'
        }

    return (

        <div style={imageFlexContainer}>
            {width >= desktopBreakpoint ? <div style={bioImageContainer}><DiscoverSticker /><ScrollSticker /></div> : width >= tabletBreakpoint ? <div style={bioImageContainer}><DiscoverSticker /></div> : <div style={bioImageContainer}></div>}
        </div>
    )
}