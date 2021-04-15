import React from 'react';
import classes from './Background.module.css';
import Particles from 'react-particles-js';
import {paramsWelcome} from '../../../Toolkit/ParticleParamaters';



const Background = props => {
    
    return    <div className={classes.Wrap}>
    <Particles className={classes.EnterAnimation} width="100vw" height="100vh" params={paramsWelcome} />
</div>
}

export default Background;
