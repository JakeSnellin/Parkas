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
        marginBottom: '46px'
    }

    const sourceStyle = {
        width: width >= desktopBreakpoint ? '625px' : width >= tabletBreakpoint ? '555px' : '100%',
        fontSize: width >= desktopBreakpoint ? '34px' : width >= tabletBreakpoint ? '24px' : '20px',
        fontFamily: 'roc-grotesk',
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: '110px'
    }

    const quoteContainer = {
        margin: '150px 0'
    }

    return(

        <div style={quoteContainer}>
            {props.quotes.map((text, index)=>{
            return index % 2 === 0 ? <p key={index} style={quoteStyle}>{text}</p> : <p key={index} style={sourceStyle}>{text}</p>
        })}
        </div>
    )
}