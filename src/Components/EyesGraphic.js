import React from "react";
import { useViewport } from "../Util/CustomHooks";
//import { getEyesGraphic } from "../Util/Hygraph";
import { useEffect } from "react";
import { useState } from "react";
import "../App/App.css";
import ball from "../animations/Assets/Ball.png"

export function EyesGraphic(props){

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const [coordinates, setCoordinates] = useState({x: 0, y: 0});

    //const [backgroundUrl, setBackgroundUrl] = useState('');

    /*const backgroundStyles = {
        container: (url) => ({
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            listStyle: 'none',
            width: '100%',
            height: '912px',
            marginBottom: '150px'
        })
    }*/

    /*useEffect(()=>{
        getEyesGraphic(setBackgroundUrl);
    },[])*/

    /*const balls = document.getElementsByClassName('ball');
    document.onmousemove = function(){
        let x = MouseEvent.clientX * 100 / window.innerWidth + '%';
        let y = MouseEvent.clientY * 100 / window.innerHeight + '%';

        for(var i=0; i<2; i++){
            balls[i].style.left = x;
        }
    }*/

    useEffect(() => {
        function handleMouseMove(event){
            setCoordinates({x: event.clientX * 100 / window.innerWidth + "%", y: event.clientY * 100 / window.innerHeight + "%"})
        }

        window.addEventListener("mousemove", handleMouseMove);
    
        return () => window.removeEventListener("mousemove", handleMouseMove)
  
        },[])

        const ballStyles={
            backgroundImage: `url(${ball})`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            margin: '0',
            height: '57%',
            width: '57%',
            left: coordinates.x,
            top: coordinates.y
            
        }

    return(

            width >= desktopBreakpoint ? <div className="eyes"><div className="eye-part"><div className="eye"><div style={ballStyles}></div></div></div>
            <div className="eye-part"><div className="eye"><div style={ballStyles}></div></div></div></div> : null

        //width >= desktopBreakpoint ? <div style={backgroundStyles.container(eyes)}><div ></div></div> : null

    )
}