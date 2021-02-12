import React, {useEffect, useState, useRef} from 'react';
import classes from './Background.module.css';
import {animateOnScroll} from '../../../Toolkit/functions';
import Particles from 'react-particles-js';
import {paramsWelcome} from '../../../Toolkit/ParticleParamaters';



const Background = props => {
    let [color, setColor] = useState('#49d2fc')
    let pColor = {
        1 : '#e3a812',
        2: '#20f5e0',
        3: '#7eb2c2',
        4: '#49d2fc',
    }
    let col = useRef('#fffff');
    useEffect(() => {
        let project = document.getElementById('P1W')
        let eventObj = window.addEventListener('scroll', () => {
           
            if((project.getBoundingClientRect().top <= 0 || project.getBoundingClientRect().bottom >= 0) && col.current !== pColor[1] ) {
                col.current = pColor[1]
                setColor(null);
                setColor('#e3a812')
                
               }
           
        }) 
       
    }, [])
   
    paramsWelcome.particles.color.value = color;
    return    <div  className={classes.Wrap}>
    {color && <Particles width="100vw" height="100vh" params={paramsWelcome} />}
</div>
}

export default Background;
