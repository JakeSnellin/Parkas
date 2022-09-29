import React, { useState } from "react";
import { getBio } from '../Util/Hygraph';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { BioHeader } from "./BioHeader";
import { BioImage } from "./BioImage";
import { BioBackgroundTop } from "./BioBackgroundTop";
import { About } from "./About";
import { BioGallery } from "./BioGallery";
import { Quotes } from "./Quotes";
import { useViewport } from "../Util/CustomHooks";
import { Footer } from "./Footer";
import { EyesGraphic } from "./EyesGraphic";
import { Credits } from "./Credits";
import { TabletGraphic } from "./TabletGraphic";
import { FooterGraphic } from "./FooterGraphic";

export function Bio (props){

    let {slug} = useParams();

    const [data, setData] = useState(null);

    useEffect(() =>{
        getBio({
            variables: {
                slug: slug
            }},setData);
    },[])

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const innerWrapper = {
        margin: width <= mobileBreakpoint ? 'auto 12px' : width <= tabletBreakpoint ? 'auto 20px' : 'auto 30px'
    }

    if(!data){
        return null;
    }
    
    return(
        <div className="bio-container">
            <div className="app-outer-wrapper">
                <BioHeader closeButton={props.closeButton}/>
                <BioImage images={data.artists[0].bio.bioImage} newsSticker={data.artists[0].bio.newsSticker.url} scrollSticker={data.artists[0].bio.scrollSticker.url}/>
                <BioBackgroundTop glassGraphic={data.artists[0].bio.bioGlassGraphic} name={data.artists[0].bio.name} socialMediaLinks={data.artists[0].bio.socialMediaLinks}/>
                <div style={innerWrapper}>
                    <About description={data.artists[0].bio.artistDescription}/>
                </div>
                <TabletGraphic />
                <div style={innerWrapper}>
                    <Quotes quotes={data.artists[0].bio.quotes}/>
                </div>
                    <EyesGraphic />
                <div style={innerWrapper}>
                    <Credits credits={data.artists[0].bio.credits}/>
                    <BioGallery galleryImages={data.artists[0].bio.galleryImage}/>
                    <Footer icon={props.icon}/>
                </div>
                    <FooterGraphic />
            </div>
        </div>
    )
}