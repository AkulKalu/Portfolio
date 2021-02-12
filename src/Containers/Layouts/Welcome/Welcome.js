import React, { Component, Fragment } from 'react';
import classes from './Welcome.module.css';
import Message from '../../../Components/WelcomeMessage/Message';
import Menu from '../../../Components/Menu/Menu';



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
             
                <div id="H" className={classes.Welcome}> 
                    <Menu allowHover={this.state.showMessage} timeMessage={this.navAnimEndHandler} />
                    {this.state.showMessage ? <Message /> : null}
                </div>
            </Fragment>
            
        );
    }
}

export default Welcome;

