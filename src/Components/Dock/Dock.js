import React, { useState, useEffect, useRef, Fragment} from 'react';
import Additional from '../Additional/Additional';
import classes from './Dock.module.css';
import Burger from '../Burger/Burger';
import { useMediaQuery } from 'react-responsive';


const Dock = props => {
    const [state, setState] = useState({
        showDock: false,
        active: null,
    })
    const refState = useRef(state);
    const mobile = useMediaQuery({query:'(max-width: 1024px)'});
    refState.current.mobile = mobile

    useEffect(() => {
        window.addEventListener('scroll', dockToggle);
    }, []);

   
    const dockToggle = e => {
        const inView = {
            P1W:  document.getElementById('P1W').getBoundingClientRect(),
            P2W:  document.getElementById('P2W').getBoundingClientRect(),
            P3W:  document.getElementById('P3W').getBoundingClientRect(),
            A:  document.getElementById('A').getBoundingClientRect(),
            C:  document.getElementById('C').getBoundingClientRect(),
            H:  document.getElementById('H').getBoundingClientRect(),
        }
     
        const scrollIndcator = document.getElementById('scInd');
        const indicatorWidth =  window.innerWidth / (100 / ( window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100));

        window.requestAnimationFrame( ()=> {
            scrollIndcator.style.transform = `scaleX(${indicatorWidth})`
        })
        if(!refState.current.mobile && inView.P1W.y <= window.innerHeight/3 && !refState.current.showDock ){
            refState.current = {
                showDock: true,
                active: 'P1W'
            }
            setState({
                ...refState.current
            })

        }else if(!refState.current.mobile && inView.P1W.y > window.innerHeight/2 && refState.current.showDock ) {
            refState.current = {
                showDock: false,
                active: null
            }
            setState({
                ...refState.current
            })
        }else {
            for (const key in inView) {
                if( inView[key].bottom > (window.innerHeight/3) &&  
                    inView[key].bottom <= window.innerHeight + (window.innerHeight/3) && 
                    refState.current.active !== key) {
                        refState.current = {
                            ...refState.current,
                            active: key
                        }
                        setState({
                            ...refState.current
                        })
                        return;
                }
            }
        }
    }
   
    const onClickScroll = id => document.getElementById(id).scrollIntoView();
    const burgerClickHandler = () => {
        refState.current.showDock = ! refState.current.showDock
        setState({
            ...refState.current
        })
    }

    const setActive = id => {
        return state.active === id ? {
            color: 'crimson'
        }: null
    } 
    
    const showDock = state.showDock ? {
        transform: state.mobile ? 'translateX(0)' : 'translateY(0)',
    } : null

    const scrollIndcator =  <div id="scInd" className={classes.ScrollIndicator}></div>
 
    return (
        <Fragment>
            {mobile ? scrollIndcator : null}
            {mobile ? <Burger click={burgerClickHandler} open={state.showDock}/>: null}
            <div id="dock" style={showDock} className={classes.Dock}>
                <div className={classes.InnerWrap}>
                    <span onClick={()=> onClickScroll('H')} style={setActive('H')} className={classes.DockBtn}>HOME</span>
                    <span onClick={()=> onClickScroll('P1W')} style={setActive('P1W')} className={classes.DockBtn}>PROJECT 1</span>
                    <span onClick={()=> onClickScroll('P2W')} style={setActive('P2W')} className={classes.DockBtn}>PROJECT 2</span>
                    <span onClick={()=> onClickScroll('P3W')} style={setActive('P3W')} className={classes.DockBtn}>PROJECT 3</span>
                    <span onClick={()=> onClickScroll('A')} style={setActive('A')} className={classes.DockBtn}>ABOUT ME</span>
                    <span onClick={()=> onClickScroll('C')} style={setActive('C')} className={classes.DockBtn}>CONTACT</span>
                    {mobile ? null : <Additional dock />}
                    {mobile ? null : scrollIndcator}
                </div>
            </div>
        </Fragment>
    )
}

export default Dock;