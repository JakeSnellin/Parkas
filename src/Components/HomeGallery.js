import { faImages } from "@fortawesome/free-regular-svg-icons";
import React from "react"
import { Link } from 'react-router-dom';

export function HomeGallery (props){

    const galleryStyles = {
        container: isRowBased => ({
          display: 'flex',
          flexDirection: isRowBased ? 'row' : 'column',
          width: '100%',
          flexWrap: 'wrap'
        })
      };

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
        container: (isRowBased, isDesktop) => ({
            width: isDesktop ? '33.333%' : isRowBased ? '50%' : '100%',
            height: '100%'
        })
      }

    return(
            <ul style={galleryStyles.container(props.isRowBased)}>
                    {props.images.map(({url, slug}, index)=>{
                        return <div key={index} style={imageContainerStyles.container(props.isRowBased, props.isDesktop)}><li style={imageStyles.container(url)}><Link className="artist-link" to={slug}></Link></li></div>
                    })}
            </ul>
    )
}