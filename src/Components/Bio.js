import React, { useState, useRef } from "react";
import { getBio } from '../Util/Hygraph';
import { useEffect } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { BioHeader } from "./BioHeader";
import { BioImage } from "./BioImage";
import { useMediaQuery } from "../Util/CustomHooks";
import { BioBackgroundTop } from "./BioBackgroundTop";
import { DiscoverSticker } from "./DiscoverSticker";

export function Bio (props){

    let {slug} = useParams();

    const [data, setData] = useState(null);

    useEffect(() =>{
        getBio({
            variables: {
                slug: slug
            }},setData);
    },[])

    if(!data){
        return null;
    }

    return(
        <div>
            {console.log(data.artists[0].bio.name)}
            <BioHeader closeButton={props.closeButton}/>
            <BioImage slug={slug}/>
            <DiscoverSticker />
            <div>
                <BioBackgroundTop name={data.artists[0].bio.name}/>
            </div>
            <div className="tablet-wrapper">
                <h1>Bio</h1>
            </div>
        </div>
    )
}