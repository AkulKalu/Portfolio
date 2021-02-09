import React, {useEffect, useState} from 'react';
import classes from './Album.module.css';
import {animateOnScroll} from '../../Toolkit/functions'




const Album = props => {
    const [state, setState] = useState({scrolledTo: false})
    useEffect(()=> {
        animateOnScroll(props.project, setState, window.innerHeight * 1.2);

        const pics = document.querySelectorAll(`#${props.project} [data-pic]`);
        let prev = 0;
        let curr = 1;
        if(state.scrolledTo) {
            const switchPic = () => {
                pics[prev].style.opacity = '0';
                pics[curr].style.opacity = '1';
                 
                [prev, curr] = [curr,  curr === pics.length - 1 ? 0 : curr + 1]    
                setTimeout( switchPic, 5000);  
            }
            setTimeout( switchPic, 3000);
        }
       
    }, [state.scrolledTo]) 

    const images = {
        weather: [...Array(4).keys()],
        sudoku: [...Array(4).keys()],
        sorter: [...Array(3).keys()],
        qrcodes: [...Array(3).keys()],
        link: num => `../../Content/Images/${props.project.toLowerCase()}-${num + 1}.jpg`
    }

  
    
    const photos = images[props.project.toLowerCase()].map( i => {
        const show = i === 0 ? {opacity: '1'} : null;
        return <img data-pic style={show} className={classes.Pic} key={`${props.project}${i}`}  alt={`${props.project}${i}`} 
        src={require(`../../Content/Images/${props.project.toLowerCase()}-${i+1}.jpg`)}></img>
    } )
    const showAlbum = state.scrolledTo ? {
        opacity: '1'
    } : null;
    return(
        <div style={showAlbum} id={props.project} className={classes.AlbumWrap}>
            {photos}
        </div>
    )
}



export default Album;
