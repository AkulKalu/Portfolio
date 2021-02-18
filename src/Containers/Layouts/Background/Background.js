import React, {useEffect, useState, useRef} from 'react';
import classes from './Background.module.css';
import Particles from 'react-particles-js';
import {paramsWelcome} from '../../../Toolkit/ParticleParamaters';



const Background = props => {
    let [color, setColor] = useState('#ffffff');
    let [fadeOut, setFadeOut] = useState({});
 
 
    let col = useRef(0);
    
    useEffect(() => {
        let projects = ['#f6ff00', '#0af548', '#7eb2c2', '#0ac2f5', '#ffffff']
        if(color) {
        
            setTimeout(() => {
                
                setFadeOut({
                    className: classes.ExitAnimation,
                    onAnimationEnd : () => {
                        console.log('s');
                        setFadeOut({});
                        setColor(null);
                        setTimeout(() =>  setColor(projects[col.current]), 0)
                       
                        col.current = col.current < 4 ? col.current +1 : 0
                    }
                })
               
            }, 15000)
        }
       
       
    }, [color])
 
    paramsWelcome.particles.color.value = color;
    paramsWelcome.particles.line_linked.color = color
    return    <div className={classes.Wrap}>
    {color && <div {...fadeOut} ><Particles className={classes.EnterAnimation} width="100vw" height="100vh" params={paramsWelcome} /></div>}
</div>
}

export default Background;
