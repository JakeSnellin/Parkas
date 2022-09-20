import React from "react"
import { useViewport } from "../Util/CustomHooks";

export function Quotes (props){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const quoteStyle ={
        width: width >= desktopBreakpoint ? '625px' : width >= tabletBreakpoint ? '555px' : '100%',
        fontSize: width >= desktopBreakpoint ? '64px' : width >= tabletBreakpoint ? '48px' : '32px',
        fontFamily: 'roc-grotesk',
        fontStyle: 'normal',
        fontWeight: '750', 
        marginBottom: '29px'
    }

    const sourceStyle = {
        width: width >= desktopBreakpoint ? '625px' : width >= tabletBreakpoint ? '555px' : '100%',
        fontSize: width >= desktopBreakpoint ? '32px' : width >= tabletBreakpoint ? '22px' : '18px',
        fontFamily: 'roc-grotesk',
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: '72px'
    }

    const quoteContainer = {
        margin: '100px 0'
    }

    return(

        <div style={quoteContainer}>
            {props.quotes.map((text, index)=>{
            return index % 2 === 0 ? <p key={index} style={quoteStyle}>{text}</p> : <p key={index} style={sourceStyle}>{text}</p>
        })}
        </div>
    )
}