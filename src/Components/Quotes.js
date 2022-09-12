import React from "react"
import { useViewport } from "../Util/CustomHooks";
import { useState } from "react";

export function Quotes (props){

    const [quotes, setQuotes] = useState(null);

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const quoteStyle ={
        width: width >= desktopBreakpoint ? '625px' : width >= tabletBreakpoint ? '555px' : '100%',
        fontSize: width >= desktopBreakpoint ? '64px' : width >= tabletBreakpoint ? '48px' : '32px',
        fontFamily: 'Roc Grotesk',
        fontStyle: 'normal',
        fontWeight: '750', 
        marginBottom: '28px'
    }

    const sourceStyle = {
        width: width >= desktopBreakpoint ? '625px' : width >= tabletBreakpoint ? '555px' : '100%',
        fontSize: width >= desktopBreakpoint ? '34px' : width >= tabletBreakpoint ? '24px' : '20px',
        fontFamily: 'Roc Grotesk',
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: '81px'
    }

    const quoteContainer = {
        margin: '150px 0'
    }

    return(

        <div style={quoteContainer}>
            {console.log(props.quotes)}
            {props.quotes.map((text, index)=>{
            return index % 2 === 0 ? <p key={index} style={quoteStyle}>{text}</p> : <p key={index} style={sourceStyle}>{text}</p>
        })}
        </div>
    )
}