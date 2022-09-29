import { useViewport } from "../Util/CustomHooks";
import React from "react";

export function SubHeader (props) {

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;
    
    const subHeadingStyles = {
        fontSize: width >= desktopBreakpoint ? '36px' : width >= tabletBreakpoint ? '24px' : '20px',
        marginBottom: width >= desktopBreakpoint ? '36px' : width >= tabletBreakpoint ? '28px' : '21px',  
        letterSpacing: '1%',
        lineHeight: '79%',
        fontFamily: 'roc-grotesk',
        fontStyle: 'normal',
        fontWeight: '750'
    }
    
    return(
        <h2 style={subHeadingStyles}>{props.subHeading}</h2>
    )
}