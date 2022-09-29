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
        marginBottom: '29px',
        color: '#000000'
    }

    const sourceStyle = {
        width: width >= desktopBreakpoint ? '625px' : width >= tabletBreakpoint ? '555px' : '100%',
        fontSize: width >= desktopBreakpoint ? '32px' : width >= tabletBreakpoint ? '22px' : '18px',
        fontFamily: 'roc-grotesk',
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: width >= desktopBreakpoint ? '72px' : '52px',
        color: '#000000'
    }

    const quoteContainer = {
        marginBottom: width >= desktopBreakpoint ? '150px' : width >= tabletBreakpoint ? '135px' : '105px',
        marginTop: '0',
    }

    return(

        <div style={quoteContainer}>
            {props.quotes.map((text, index)=>{
            return index % 2 === 0 ? <p key={index} style={quoteStyle}>{text}</p> : <p key={index} style={sourceStyle}>{text}</p>
        })}
        </div>
    )
}