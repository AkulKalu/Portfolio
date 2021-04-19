import React, {useEffect, useState} from  'react';
import classes from './Dock.module.css';



export default function ScrollIndicator() {
    const [indicatorSize, setIndicatorSize] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const indicatorWidth =  window.innerWidth / (100 / ( window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100));
            setIndicatorSize(indicatorWidth);
        })
    }, [])
    return <div id="scInd" style = {{transform: `scaleX(${indicatorSize})`}} className={classes.ScrollIndicator}></div>
}