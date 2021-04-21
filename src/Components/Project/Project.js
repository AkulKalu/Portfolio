import React, {useRef} from 'react';
import classes from './Project.module.css';
import Album from '../Album/Album';
import ProjectInfo from '../ProjectInfo/ProjectInfo'
import {useScrolledTo} from '../../Hooks/useScrolledTo';
import { useMediaQuery } from 'react-responsive';

export default function Project(props) {
    const mobile = useMediaQuery({query:'(max-width: 1200px)'});
    const reverse = (props.reverse && !mobile) ? { flexFlow: 'row-reverse'} : null;
    const scrollAncor = useRef(null);
    const scrolledTo = useScrolledTo(scrollAncor, mobile ? window.innerHeight /4.8 : window.innerHeight /8.5)

    return(
        <div id={props.id + 'W'} ref={scrollAncor} style={reverse} className={classes.Wrap}>
            <ProjectInfo  {...props} inView = {scrolledTo} />
            <Album {...props} inView = {scrolledTo}/>
        </div>
    )
}

