import React from 'react';
import classes from './Background.module.css';
import Particles from 'react-particles-js';
import {particleParamaters} from '../../../Toolkit/ParticleParamaters';
import { useMediaQuery } from 'react-responsive';


export default function Background(){
    const mobile  = useMediaQuery({query:'(max-width: 1025px)'});
    if(mobile) {
        particleParamaters.interactivity.modes.repulse.distance = 100;
    }else {
        particleParamaters.interactivity.modes.repulse.distance = 200;
    }
    return (
        <div className={classes.Wrap}>
            <Particles className={classes.EnterAnimation} width="100vw" height="100vh" params={particleParamaters} />
        </div>
    )    
}


