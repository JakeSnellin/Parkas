import React, { useState } from "react";
import { Header } from './Header'
import { getArtistUrls } from "../Util/Hygraph";
import { HomeGallery } from "./HomeGallery";
import { useEffect } from "react";
import { useViewport } from "../Util/CustomHooks";
import { Footer } from "./Footer";


export function HomePage (props){

    const [images, setImages] = useState(null);

    useEffect(()=>{
        getArtistUrls(setImages);
    },[])

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const innerWrapper = {
        margin: width <= mobileBreakpoint ? 'auto 12px' : 'auto 20px'
    }

    if(!images){
        return null;
    }

    return(
            <div className="app-outer-wrapper">
                <div style={innerWrapper}>
                    <Header logo={props.logo}/>
                </div>
                    <HomeGallery images={images}/>
                <div style={innerWrapper}>
                    <Footer icon={props.icon}/>
                </div>
            </div>
    )
}