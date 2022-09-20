import React, { useState } from "react";
import { Header } from './Header'
import { getArtist } from "../Util/Hygraph";
import { HomeGallery } from "./HomeGallery";
import { useEffect } from "react";
import { useViewport } from "../Util/CustomHooks";
import { Footer } from "./Footer";


export function HomePage (props){

    const [artists, setArtists] = useState(null); //array of artist object with url, slug and name label

    useEffect(()=>{
        getArtist(setArtists);
    },[])

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const innerWrapper = {
        margin: width <= mobileBreakpoint ? 'auto 12px' : 'auto 20px'
    }

    if(!artists){
        return null;
    }

    return(
            <div className="app-outer-wrapper">
                <div style={innerWrapper}>
                    <Header logo={props.logo}/>
                </div>
                    <HomeGallery artists={artists}/>
                <div style={innerWrapper}>
                    <Footer icon={props.icon}/>
                </div>
            </div>
    )
}