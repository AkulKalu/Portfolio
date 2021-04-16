import React, {useEffect} from 'react';
import classes from './Album.module.css';
import {projectDescription} from '../../Content/Text/text';




const Album = props => {
    useEffect(()=> {

        const pics = document.querySelectorAll(`#${props.project} [data-pic]`);
        let prev = 0;
        let curr = 1;
        if(props.inView) {
            const switchPic = () => {
                pics[prev].style.opacity = '0';
                pics[curr].style.opacity = '1';
                 
                [prev, curr] = [curr,  curr === pics.length - 1 ? 0 : curr + 1]    
                setTimeout( switchPic, 5000);  
            }
            setTimeout( switchPic, 3000);
        }
       
    }, [props.inView]) 

   
    let imgLinks = projectDescription[props.project].images;
 
    const photos = imgLinks.map(( link, i )=> {
        const show = i === 0 ? {opacity: '1'} : null;
      
        return  <img 
                    key={`${props.project}${i}`} 
                    src={ link} data-pic style={show} 
                    className={`${classes.Pic} ${props.reverse ? classes.RotateRight : classes.RotateLeft}`} 
                    alt=""/>
    } )
   
    return(
        <div id={props.project} className={`${classes.AlbumWrap} ${props.inView && classes.AnimEnter}`}>
            {photos}
        </div>
    )
}



export default Album;
