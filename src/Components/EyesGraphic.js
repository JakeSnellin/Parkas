import React from "react";
import { useViewport } from "../Util/CustomHooks";
import { useEffect } from "react";
import { useState } from "react";
import "../App/App.css";
import ball from "../animations/Assets/Ball.png"

export function EyesGraphic(props){

    const desktopBreakpoint = 1400;

    const { width } = useViewport();

    const [coordinates, setCoordinates] = useState({x: 0, y: 0});

    useEffect(() => {
        function handleMouseMove(event){
            setCoordinates({x: event.clientX * 100 / window.innerWidth + "%", y: event.clientY * 100 / window.innerHeight + "%"})
        }

        window.addEventListener("mousemove", handleMouseMove);
    
        return () => window.removeEventListener("mousemove", handleMouseMove);
  
        },[])

        const ballStyles={
            backgroundImage: `url(${ball})`,
            position: 'absolute',
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
    )
}