import React, { useState, useRef } from "react";
import { getBio } from '../Util/Hygraph';
import { useEffect } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { BioHeader } from "./BioHeader";
import { BioImage } from "./BioImage";
import { BioBackgroundTop } from "./BioBackgroundTop";
import { DiscoverSticker } from "./DiscoverSticker";
import { About } from "./About";
import { BioGallery } from "./BioGallery";
import { BackgroundGraphic } from "./BackgroundGraphic";
import { Quotes } from "./Quotes";
import { useViewport } from "../Util/CustomHooks";
import { Footer } from "./Footer";
import { EyesGraphic } from "./EyesGraphic";
import { Credits } from "./Credits";

export function Bio (props){

    let {slug} = useParams();

    const [data, setData] = useState(null);

    useEffect(() =>{
        getBio({
            variables: {
                slug: slug
            }},setData);
    },[])

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const innerWrapper = {
        margin: width <= mobileBreakpoint ? 'auto 12px' : width <= tabletBreakpoint ? 'auto 20px' : 'auto 30px'
    }


    if(!data){
        return null;
    }
    

    return(
        <div>
            <BioHeader closeButton={props.closeButton} headerGraphics={props.headerGraphics}/>
            <BioImage slug={slug}/>
            <BioBackgroundTop name={data.artists[0].bio.name} socialMediaLinks={data.artists[0].bio.socialMediaLinks}/>
            <div style={innerWrapper}>
                <About description={data.artists[0].bio.artistDescription}/>
                <BackgroundGraphic />
                <Quotes quotes={data.artists[0].bio.quotes}/>
                <EyesGraphic />
                <Credits credits={data.artists[0].bio.credits}/>
                <BioGallery galleryImages={data.artists[0].bio.galleryImage}/>
                <Footer icon={props.icon}/>
            </div>
        </div>
    )
}