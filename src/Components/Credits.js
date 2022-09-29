import React from "react";
import { SubHeader } from "./SubHeader";
import { useViewport } from "../Util/CustomHooks";

export function Credits (props){

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const creditTextStyles = {
        width: width >= desktopBreakpoint ? '682px' : width >= tabletBreakpoint ? '555px' : '80%',
        fontSize: width >= desktopBreakpoint ? '36px' : width >= tabletBreakpoint ? '21px' : '18px',
        lineHeight: width >= desktopBreakpoint ? '55px' : width >= tabletBreakpoint ? '27px': '26px',
        letterSpacing: '1px', 
        color: '#000000',
        marginBottom: width > desktopBreakpoint ? '52px' : width >= tabletBreakpoint ? '32px' : '26px',
        fontFamily: 'roc-grotesk',
        fontStyle: 'normal',
        fontWeight: '400',
        padding: '8px 0'
    }

    const creditsContainerStyles = {
        marginBottom: width >= desktopBreakpoint ? '150px' : width >= tabletBreakpoint ? '135px' : '105px',
    }

    return (
        
        <div style={creditsContainerStyles}>
            <SubHeader subHeading={'CREDITS'}/>
            {props.credits.map((text, index)=>{
                return <p key={index} style={creditTextStyles}>{text}</p>
            })}
        </div>
    )
}