import { Link } from "react-router-dom"
import React from "react"
import { useViewport } from "../Util/CustomHooks";

export function BioHeader (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    return(
        <div>
            <div className="bio-header-flex-container">
                {width <= mobileBreakpoint ? <div className="bio-header-graphic-mobile" style={{backgroundImage: `url(${props.headerGraphics[0].url})`}}>
                    <Link to="/" className="close-button-container-mobile" style={{backgroundImage: `url(${props.closeButton})`}}></Link>
                </div> : <div className="bio-header-graphic-desktop" style={{backgroundImage: `url(${props.headerGraphics[0].url})`}}>
                    <Link to="/" className="close-button-container-desktop" style={{backgroundImage: `url(${props.closeButton})`}}></Link>
                </div>}
            </div>
        </div>
    )
}