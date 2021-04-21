import React, { useState, Fragment } from 'react';
import classes from './Welcome.module.css';
import Message from '../../../Components/WelcomeMessage/Message';
import Menu from '../../../Components/Menu/Menu';



export default function Welcome() {
    const [state, setState] = useState({
        showMessage: false,
    })

    const showTextWhenNavAnimated = () => {
        setState({
            showMessage: true,
        })
    }
   
    return (
        <Fragment>
            <div id="H" className={classes.Welcome}> 
                <Menu allowHover={state.showMessage} timeMessage={showTextWhenNavAnimated} />
                {state.showMessage ? <Message /> : null}
            </div>
        </Fragment>
        
    );
    
}


