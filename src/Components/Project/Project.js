import React, {useRef, useState, useEffect} from 'react';
import classes from './Project.module.css';
import Album from '../Album/Album';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import { useMediaQuery } from 'react-responsive';

function monitorIfScrolledTo(ref, callback, condition = 0) {
    const cmpEnter = () => {
        if(ref.current.getBoundingClientRect().top < condition ) {
           callback();
           window.removeEventListener('scroll', cmpEnter)
        }
    }
    window.addEventListener('scroll', cmpEnter);
}



const Project = props => {
    const [scrolledTo, setScrolledTo] = useState(false);
    const mobile = useMediaQuery({query:'(max-width: 1024px)'});
    const reverse = (props.reverse && !mobile) ? { flexFlow: 'row-reverse'} : null;
    const el = useRef(null);
    useEffect( () => {
        monitorIfScrolledTo(el, ()=> setScrolledTo(true) )
    }, []);

    return(
        <div  id={props.id + 'W'} ref={el} style={reverse} className={classes.Wrap}>
            <ProjectInfo  {...props} inView = {scrolledTo} />
            <Album {...props} inView = {scrolledTo}/>
        </div>
       
    )
}

export default Project;
