import React from "react"
import { useViewport } from "../Util/CustomHooks";
import { SubHeader } from "./SubHeader";

export function About (props){

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const aboutTextStyles = {
        maxWidth: width >= desktopBreakpoint ? '715px' : width >= tabletBreakpoint ? '461px' : '100%',
        fontSize: width >= desktopBreakpoint ? '36px' : width >= tabletBreakpoint ? '21px' : '18px',
        lineHeight: width >= desktopBreakpoint ? '55px' : width >= tabletBreakpoint ? '32px': '24px',
        letterSpacing: '1px', 
        color: '#000000',
        marginBottom: '105px'
    }

    const aboutContainerStyles ={
        width: '100%',
        marginTop: width >= desktopBreakpoint ? '131px' : width >= tabletBreakpoint ? '90px' : '70px'
    }

    return (

        <div style={aboutContainerStyles}>
            <SubHeader subHeading={'ABOUT'}/>
            <p style={aboutTextStyles}>{props.description}</p>
        </div>
    )
}