import React, {useEffect, useState} from 'react';
import classes from './Album.module.css';
import {projectDescription} from '../../Content/Text/text';

function switchSlide(callback, end, startAt = 0 ) {
    let current = startAt;
    let next = startAt + 1
    const nextSlide = () => {
               callback(next);
               current = next;
               next = current === end ? startAt : current + 1;
               setTimeout( nextSlide, 5000);  
           }
   setTimeout( nextSlide, 3000);
}

export default function Album(props) {
    const [slide, setSlide] = useState(0);
    let imgLinks = projectDescription[props.project].images;

    useEffect(()=> {
        if(props.inView) {
            switchSlide((val) =>setSlide(val), imgLinks.length - 1)
        }
    }, [props.inView]) 

    let photos = imgLinks.map( (link, i) => {
        let fadeIn = slide === i  ? {opacity: '1'} : null;
        return (
            <img 
                key={`${props.project}${i}`} 
                src={ link} data-pic style={fadeIn} 
                className={`${classes.Pic} ${props.reverse ? classes.RotateRight : classes.RotateLeft}`} 
                alt=""
            />
        ) 
    } );
   
    return  props.inView ? 
                <div id={props.project} className={`${classes.AlbumWrap} ${classes.AnimEnter}`}>
                    {photos}
                </div> 
            : null
}



