import { useViewport } from "../Util/CustomHooks";
import React from "react";

export function SubHeader (props) {

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;
    
    const subHeadingStyles = {
        fontSize: width >= desktopBreakpoint ? '30px' : width >= tabletBreakpoint ? '18px' : '14px',
        marginBottom: width >= desktopBreakpoint ? '31px' : width >= tabletBreakpoint ? '18px' : '16px',  
        letterSpacing: '2%',
        lineHeight: '79%'
    }
    
    return(
        <h2 style={subHeadingStyles}>{props.subHeading}</h2>
    )
}