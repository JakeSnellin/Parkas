import React from 'react';
import { Link } from 'react-router-dom';
import { useViewport } from "../Util/CustomHooks";
import { useEffect, useState } from 'react';
import { TabletGraphic } from './TabletGraphic';

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

    const getLabelVariableStyles = (fileName, fileType) =>{

      switch(fileName){
        case `yellow-rounded-wide.${fileType}`:
          return {paddingTop: 'calc(1 / 1.68 * 100%)', width: '51%', top: '62%', right: '35%', transform: 'rotate(6.43deg)'}
         
        case `yellow-half-shredded.${fileType}`:
          return {paddingTop: 'calc(1 / 2.23 * 100%)', width: '80%', top: '50%', right: '20%', transform: 'rotate(-3.52deg)'}

        case  `yellow-small-torn.${fileType}`:
          return {paddingTop: 'calc(1 / 1.68 * 100%)', width: '51%', top: '58%', right: '30%', transform: 'rotate(8.39deg)'}

        case `tanish-rounded-half.${fileType}`:
          return {paddingTop: 'calc(1 / 2.12 * 100%)', width: '59%', top: '50%', right: '13%', transform: 'rotate(0deg)'}
      }
    }

    const labelStyles = {
      container: (url, fileName) => ({
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: 'contain',
      position: 'absolute',
      overflow: 'hidden',
      right: '9%',
      bottom: '5%',
      height: '0',
      paddingTop: getLabelVariableStyles(fileName, 'png').paddingTop,
      width: getLabelVariableStyles(fileName, 'png').width,
      zIndex: '1'
      })
    }

    const textStyles = {
      container: (fileName) => ({
      position: 'absolute',
      top: getLabelVariableStyles(fileName, 'png').top,
      right: getLabelVariableStyles(fileName, 'png').right,
      transform: getLabelVariableStyles(fileName, 'png').transform,
      color: 'black',
      fontFamily: 'flood-std',
      fontSize: width >= desktopBreakpoint ? '40px' : width >= tabletBreakpoint ? '3.8vw' : '7.8vw',
      width: 'min-content',
      overflow: 'visible',
      })
    }

    const gifContainerStyles = {
      container: (gif, gifFileName) => ({
        backgroundImage: `url(${gif})`,
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        right: '9%',
        bottom: '5%',
        height: '0',
        paddingTop: getLabelVariableStyles(gifFileName, 'gif').paddingTop,
        width: getLabelVariableStyles(gifFileName, 'gif').width,
      })
    }


    return(  
        <ul style={galleryStyles}>
          {props.artists.map(({artistImages, slug, pngNameLabel, name, pngFileName, gifNameLabel, gifFileName}, index) =>{
            return <Link key={index} style={linkStyles} to={slug}><div className="image-container" style={aspectRatioBox}><div style={width >= tabletBreakpoint ? aspectRatioBoxInsideStyles.container(artistImages[0].url) : aspectRatioBoxInsideStyles.container(artistImages[1].url)}></div>{width >= tabletBreakpoint ? <div className="static-label" style={labelStyles.container(pngNameLabel, pngFileName)}><p style={textStyles.container(pngFileName)}>{name}</p></div> : null} <div style={gifContainerStyles.container(gifNameLabel, gifFileName)}><p style={textStyles.container(pngFileName)}>{name}</p></div></div></Link>
          })}
        </ul>
    )
}