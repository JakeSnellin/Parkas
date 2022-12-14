import React from 'react';
import { useViewport } from "../Util/CustomHooks";
import { NewsSticker } from "./NewsSticker";
import { ScrollSticker } from "./ScrollSticker";

export function BioImage (props){

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const bioImageContainer = {
        backgroundImage: width >= desktopBreakpoint ? `url(${props.images[2].url})` : width >= tabletBreakpoint ? `url(${props.images[1].url})` : `url(${props.images[0].url})`,
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
            {width >= desktopBreakpoint ? <div style={bioImageContainer}><NewsSticker newsSticker={props.newsSticker} /><ScrollSticker scrollSticker={props.scrollSticker}/></div> : width >= tabletBreakpoint ? <div style={bioImageContainer}><NewsSticker newsSticker={props.newsSticker}/></div> : <div style={bioImageContainer}></div>}
        </div>
    )
}