import React, { useState, useRef } from "react";
import { Header } from './Header'
import { useMediaQuery } from "../Util/CustomHooks";
import { getArtistUrls } from "../Util/Hygraph";
import { HomeGallery } from "./HomeGallery";
import { useEffect } from "react";
import { Footer } from "./Footer";


export function HomePage (props){

    const [images, setImages] = useState(null);

    //const isMobile = useMediaQuery('(min-width: 320px)');

    const isRowBased = useMediaQuery('(min-width: 768px)');

    const isDesktop = useMediaQuery('(min-width: 850px)');


    useEffect(()=>{
        //getArtistUrls({ variables: { size: 'Small' }}, mapArtists);
        getArtistUrls({ variables: { size: 'Small' }}, setImages);
    },[])

    /*const mapArtists = (artistArray) =>{
        setImages(artistArray.map(({url, slug}, index)=>{
            return <li key={index}><Link to={slug}><div className="home-image-container" style={{backgroundImage: `url(${url})`}}></div></Link></li>
        }))
    }*/

    if(!images){
        return null;
    }

    return(
        <div>
            {console.log(images)}
            <Header logo={props.logo}/>
            <HomeGallery images={images} isRowBased={isRowBased} isDesktop={isDesktop}/>
            <Footer icon={props.icon}/>
        </div> 
    )
}