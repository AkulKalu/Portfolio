import React, { Component, Fragment } from 'react';
import classes from './Welcome.module.css';
import Message from '../../../Components/WelcomeMessage/Message';
import Particles from 'react-particles-js';
import Menu from '../../../Components/Menu/Menu';
import {paramsWelcome} from '../../../Toolkit/ParticleParamaters';


class Welcome extends Component {
    state = {
        showMessage: false,
    }

    navAnimEndHandler = () => {
        this.setState({
            showMessage: true,
        })
    }
   
    render() {
        return (
            <Fragment>
                <div  className={classes.Wrap}>
                  <Particles width="100vw" height="100vh" params={paramsWelcome} />
            </div>
                <div id="H" className={classes.Welcome}> 
                    <Menu allowHover={this.state.showMessage} timeMessage={this.navAnimEndHandler} />
                    {this.state.showMessage ? <Message /> : null}
                </div>
            </Fragment>
            
        );
    }
}

export default Welcome;

