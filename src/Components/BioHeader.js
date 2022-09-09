import { Link } from "react-router-dom"
import React from "react"
import { useMediaQuery } from "../Util/CustomHooks";
import { getBioHeader } from "../Util/Hygraph";
import { useState } from "react";

export function BioHeader (props){

    /*const bioHeaderStyles = {
        container: (isDesktop) => ({
            backgroundImage: isDesktop ? `url(${props.headerGraphics[0].url})` : `url(${props.headerGraphics[1].url})`,
        })
      }*/



    return(
        <div>
            <div>
                <Link to="#" className="close-button-container" style={{backgroundImage: `url(${props.closeButton})`}}></Link>
            </div>
        </div>
    )
}