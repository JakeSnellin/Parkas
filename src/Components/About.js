import React from "react"
import { useViewport } from "../Util/CustomHooks";
import { SubHeader } from "./SubHeader";

export function About (props){

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const aboutTextStyles = {
        maxWidth: width >= desktopBreakpoint ? '715px' : width >= tabletBreakpoint ? '461px' : '100%',
        fontSize: width >= desktopBreakpoint ? '32px' : width >= tabletBreakpoint ? '21px' : '18px',
        lineHeight: width >= desktopBreakpoint ? '53px' : width >= tabletBreakpoint ? '30px': '24px',
        letterSpacing: '1px', 
        color: '#000000',
        marginBottom: width > desktopBreakpoint ? '34px' : width >= tabletBreakpoint ? '20px' : '8px',
        padding: '8px 0'
    }

    const aboutContainerStyles ={
        width: '100%',
        marginTop: width >= desktopBreakpoint ? '131px' : width >= tabletBreakpoint ? '90px' : '70px',
        marginBottom: width >= desktopBreakpoint ? '150px' : width >= tabletBreakpoint ? '135px' : '105px',
    }

    return (

        <div style={aboutContainerStyles}>
            <SubHeader subHeading={'ABOUT'}/>
            {props.description.map((text, index)=>{
                return <p key={index} style={aboutTextStyles}>{text}</p>
            })}
        </div>
    )
}