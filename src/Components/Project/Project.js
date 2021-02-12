import React from 'react';
import classes from './Project.module.css';
import Album from '../Album/Album';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import { useMediaQuery } from 'react-responsive';



const Project = props => {
    const mobile = useMediaQuery({query:'(max-width: 1024px)'});
    const reverse = (props.reverse && !mobile) ? { flexFlow: 'row-reverse'} : null;
    return(
        <div id={props.id + 'W'} style={reverse} className={classes.Wrap}>
            <ProjectInfo {...props} />
            <Album {...props}/>
        </div>
       
    )
}

export default Project;
