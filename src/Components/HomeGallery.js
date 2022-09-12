
import React from "react"
import { Link } from 'react-router-dom';
import { useViewport } from "../Util/CustomHooks";


export function HomeGallery (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

      const imageStyles = {
        container: (url) => ({
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            listStyle: 'none'
        })
      }

      const imageContainerStyles = {
            width: width >= desktopBreakpoint ? '33.333%' : width >= tabletBreakpoint ? '50%' : '100%',
            height: '100%'
      }


      const galleryStyles = {
        display: 'flex',
        flexDirection: width <= mobileBreakpoint ? 'column' : 'row',
        width: '100%',
        flexWrap: 'wrap',
      }

    return(
        
            <ul style={galleryStyles}>
                    {props.images.map(({url, slug}, index)=>{
                        return <div key={index} style={imageContainerStyles}><Link style={imageStyles.container(url)}className="artist-link" to={slug}></Link></div>
                    })}
            </ul>
    )
}