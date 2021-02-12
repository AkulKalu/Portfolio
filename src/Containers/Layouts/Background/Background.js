import React, {useEffect, useState, useRef} from 'react';
import classes from './Background.module.css';
import {animateOnScroll} from '../../../Toolkit/functions';
import Particles from 'react-particles-js';
import {paramsWelcome} from '../../../Toolkit/ParticleParamaters';



const Background = props => {
    let [color, setColor] = useState('#ffffff');
 
    let col = useRef('#ffffff');
    useEffect(() => {
        let projects = {
            P1W :{ color: '#f6ff00'},
            P2W: {color:'#0af548'},
            P3W: {color:'#7eb2c2'},
            P4W: {color:'#0ac2f5'},
        }
        let projectIds = Object.keys(projects)
        projectIds.forEach( id => projects[id].window = document.getElementById(id))
       
        let eventObj = window.addEventListener('scroll', () => {
           
            if((projects.P1W.window.getBoundingClientRect().top > 0 || projects.P4W.window.getBoundingClientRect().bottom < 0) && col.current !== '#ffffff') {
                col.current = '#ffffff';
                setColor(null);
                setColor('#ffffff')
                return;
            }
            projectIds.forEach((id) => {
                let projectWindow = projects[id].window;
                let particleColor = projects[id].color
                let inView = projectWindow.getBoundingClientRect().top <= 0 && projectWindow.getBoundingClientRect().bottom >= window.innerHeight;
              
                if(inView && col.current !== particleColor) {
                    col.current = particleColor;
                    setColor(null);  
                    setColor(particleColor);
                    
                    
                }
            })
        }) 
       
    }, [])
   
    paramsWelcome.particles.color.value = color;
    paramsWelcome.particles.line_linked.color = color
    return    <div  className={classes.Wrap}>
    {color && <Particles className={classes.EnterAnimation} width="100vw" height="100vh" params={paramsWelcome} />}
</div>
}

export default Background;
