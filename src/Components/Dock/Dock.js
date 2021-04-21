import React, { useState, useEffect, Fragment} from 'react';
import classes from './Dock.module.css';
import Burger from '../Burger/Burger';
import ScrollIndicator from './ScrollIndicator';
import {useMediaQuery} from 'react-responsive';
import {scrollTo} from '../../Toolkit/functions'

let styles = {
    linkActive : {
        color: 'crimson',
    },
    dock : {
        isShown : (mobile) => {
            return{transform : mobile ? 'translateX(0)' : 'translateY(0)'}
        }
    }
}
let eventCashe = null;
function createDockEvent(state, update, mobile) {
    return  () => {
        const inView = {
            P1W:  document.getElementById('P1W').getBoundingClientRect(),
            P2W:  document.getElementById('P2W').getBoundingClientRect(),
            P3W:  document.getElementById('P3W').getBoundingClientRect(),
            P4W:  document.getElementById('P4W').getBoundingClientRect(),
            A:  document.getElementById('A').getBoundingClientRect(),
            C:  document.getElementById('C').getBoundingClientRect(),
            H:  document.getElementById('H').getBoundingClientRect(),
        }
     
        if(!mobile && inView.P1W.y <= window.innerHeight/3 && !state.showDock ){
            update({
                showDock: true,
                active: 'P1W'
            })
    
        }else if(!mobile && inView.P1W.y > window.innerHeight/2 && state.showDock ) {
            update({
                showDock: false,
                active: null
            })
        }else {
            for (const key in inView) {
                if( inView[key].bottom > (window.innerHeight/3) &&  
                    inView[key].bottom <= window.innerHeight + (window.innerHeight/3) && 
                    state.active !== key) {
                        update({
                            ...state,
                            active: key
                        })
                        return;
                }
            }
        }
    }
}

export default function Dock(props) {
    const [state, setState] = useState({
        showDock: false,
        active: null,
    })
    const mobile = useMediaQuery({query:'(max-width: 1024px)'});

    useEffect(() => {
        window.removeEventListener('scroll',eventCashe);
        eventCashe =  createDockEvent(state, setState, mobile);
        window.addEventListener('scroll',eventCashe);
    }, [state, mobile]);

    
    const toggleDock = () => {
        setState({
            ...state,
            showDock : !state.showDock
        })
    }

    const setActiveLink = id => {
        return state.active === id ? styles.linkActive: null
    } 

    return (
        <Fragment>
            {mobile ? <ScrollIndicator /> : null}
            {mobile ? <Burger click={toggleDock} open={state.showDock}/>: null}
            <div 
                id="dock" 
                style={state.showDock ? styles.dock.isShown(mobile) : null} 
                className={classes.Dock}>
                <div className={classes.InnerWrap}>
                    <span 
                        onClick={scrollTo('H').scroll} 
                        style={setActiveLink('H')}
                        className={classes.DockBtn}>
                            HOME
                    </span>
                    <span 
                        onClick={scrollTo('P1W').scroll} 
                        style={setActiveLink('P1W')} 
                        className={classes.DockBtn}>
                            PROJECT 1
                    </span>
                    <span 
                        onClick={scrollTo('P2W').scroll} 
                        style={setActiveLink('P2W')} 
                        className={classes.DockBtn}>
                            PROJECT 2
                    </span>
                    <span 
                        onClick={scrollTo('P3W').scroll} 
                        style={setActiveLink('P3W')} 
                        className={classes.DockBtn}>
                            PROJECT 3
                    </span>
                    <span 
                        onClick={scrollTo('P4W').scroll} 
                        style={setActiveLink('P4W')} 
                        className={classes.DockBtn}>
                            PROJECT 4
                    </span>
                    <span 
                        onClick={scrollTo('A').scroll} 
                        style={setActiveLink('A')} 
                        className={classes.DockBtn}>
                            ABOUT ME
                    </span>
                    <span 
                        onClick={scrollTo('C').scroll} 
                        style={setActiveLink('C')} 
                        className={classes.DockBtn}>
                            CONTACT
                    </span>
                    {mobile ? null : <ScrollIndicator />}
                </div>
            </div>
        </Fragment>
    )
}

