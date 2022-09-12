import React from "react"
import { useViewport } from "../Util/CustomHooks";
import { SubHeader } from "./SubHeader";

export function About (props){

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const aboutTextStyles = {
        width: width >= desktopBreakpoint ? '715px' : width >= tabletBreakpoint ? '366px' : '296px',
        fontSize: width >= desktopBreakpoint ? '36px' : width >= tabletBreakpoint ? '21px' : '18px',
        lineHeight: width >= desktopBreakpoint ? '60px' : width >= tabletBreakpoint ? '32px': '24px',
        letterSpacing: '1px', 
        color: '#333333',
        marginBottom: '105px'
    }

    const aboutContainerStyles ={
        width: '100%',
        marginTop: width >= desktopBreakpoint ? '151px' : width >= tabletBreakpoint ? '90px' : '70px'
    }

    return (

        <div style={aboutContainerStyles}>
            <SubHeader subHeading={'ABOUT'}/>
            <p style={aboutTextStyles}>{props.description}</p>
        </div>
    )
}