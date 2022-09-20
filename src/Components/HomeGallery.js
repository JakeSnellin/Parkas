import { faRotate } from "@fortawesome/free-solid-svg-icons";
import React from "react"
import { Link, Redirect } from 'react-router-dom';
import { useViewport } from "../Util/CustomHooks";


export function HomeGallery (props){

    const { width } = useViewport();

    const mobileBreakpoint = 576;

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1400;

    const galleryStyles = {
      display: 'flex',
      flexDirection: width <= mobileBreakpoint ? 'column' : 'row',
      width: '100%',
      flexWrap: 'wrap',
  }

    const linkStyles = {
      display: 'block',
      width: width >= desktopBreakpoint ? '33.333%' : width >= tabletBreakpoint ? '50%' : '100%',
      listStyle: 'none',
    }

    const aspectRatioBox = {
        paddingTop: 'calc(9 / 6 * 100%)',
        height: '0',
        overflow: 'hidden',
        position: 'relative'
    }

    const aspectRatioBoxInsideStyles = {
      container: (url) => ({
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      })
    }

    const getLabelVariableStyles = (url) =>{

      switch(url){
        case "https://media.graphassets.com/GLoVQlOVTVuLbm2ozxED":
          return {paddingTop: 'calc(1 / 1.68 * 100%)', width: '51%', top: '62%', right: '35%', transform: 'rotate(6.43deg)'}
         
        case "https://media.graphassets.com/sCh9lnvCQmGifsQG9VNx":
          return {paddingTop: 'calc(1 / 2.23 * 100%)', width: '80%', top: '50%', right: '15%', transform: 'rotate(-3.52deg)'}

        case "https://media.graphassets.com/PjSn4BjqRtCVLTZS2b1g":
          return {paddingTop: 'calc(1 / 1.68 * 100%)', width: '51%', top: '58%', right: '30%', transform: 'rotate(8.39deg)'}

        case "https://media.graphassets.com/xgiGpwXSVWrXr2zclQeg":
          return {paddingTop: 'calc(1 / 2.12 * 100%)', width: '59%', top: '50%', right: '13%', transform: 'rotate(0deg)'}
      }
    }

    const labelStyles = {
      container: (url) => ({
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: 'contain',
      position: 'absolute',
      overflow: 'hidden',
      right: '9%',
      bottom: '5%',
      height: '0',
      paddingTop: getLabelVariableStyles(url).paddingTop,
      width: getLabelVariableStyles(url).width
      })
    }

    const textStyles = {
      container: (url) => ({
      position: 'absolute',
      top: getLabelVariableStyles(url).top,
      right: getLabelVariableStyles(url).right,
      transform: getLabelVariableStyles(url).transform,
      color: 'black',
      fontFamily: 'flood-std',
      fontSize: width >= desktopBreakpoint ? '40px' : width >= tabletBreakpoint ? '3.8vw' : '7.8vw',
      width: 'min-content',
      overflow: 'visible',
      })
    }

    return(
                    
        <ul style={galleryStyles}>
          {props.artists.map(({images, slug, nameLabel, name}, index) =>{
            return <Link key={index} style={linkStyles} to={slug}><div style={aspectRatioBox}><div style={width >= tabletBreakpoint ? aspectRatioBoxInsideStyles.container(images[0].url) : aspectRatioBoxInsideStyles.container(images[1].url)}></div><div style={labelStyles.container(nameLabel)}><p style={textStyles.container(nameLabel)}>{name}</p></div></div></Link>
          })}
        </ul>
    )
}