import footerGraphicSmall from '../Graphics/strip_small.png';
import footerGraphicMedium from '../Graphics/strip_medium.png';
import footerGraphicLarge from '../Graphics/strip_large.png';
import React from 'react'
import { useViewport } from '../Util/CustomHooks';

export function FooterGraphic (){

    const { width } = useViewport();

    const tabletBreakpoint = 768;

    const desktopBreakpoint = 1200;

    const footerGraphicStyles = {
        width: '100%',
        height: width >= desktopBreakpoint ? '213px'  :  width >= tabletBreakpoint ? '150px' : '82px'
    }
    
    const footerGraphicImgStyles = {
        container: () =>({
            backgroundImage: width >= desktopBreakpoint ? `url(${footerGraphicLarge})`: width >= tabletBreakpoint ? `url(${footerGraphicMedium})` : `url(${footerGraphicSmall})`,
            backgroundPosition: 'center',
            backgroundSize: 'Cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
        })
    }

    return (
        <div>
            <div style={footerGraphicStyles}><div style={footerGraphicImgStyles.container()}></div></div>
        </div>
    )
}