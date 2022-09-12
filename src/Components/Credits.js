import React from "react";
import { SubHeader } from "./SubHeader";
import { useViewport } from "../Util/CustomHooks";

export function Credits (props){

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const creditTextStyles = {
        width: width >= desktopBreakpoint ? '682px' : width >= tabletBreakpoint ? '555px' : '100%',
        fontSize: width >= desktopBreakpoint ? '36px' : width >= tabletBreakpoint ? '21px' : '18px',
        lineHeight: width >= desktopBreakpoint ? '50px' : width >= tabletBreakpoint ? '27px': '26px',
        letterSpacing: '1px', 
        color: '#333333',
        marginBottom: '150px'
    }

    return (
        
        <div>
            <SubHeader subHeading={'CREDITS'}/>
            <p style={creditTextStyles}>{props.credits}</p>
        </div>
    )
}