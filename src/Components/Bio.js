import React, { useState, useRef } from "react";
import { getBio } from '../Util/Hygraph';
import { useEffect } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";

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
            <h1>Bio</h1>
            {console.log(data)}
        </div>
    )
}