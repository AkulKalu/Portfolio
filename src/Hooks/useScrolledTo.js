import {useState, useEffect} from 'react';

function monitorIfScrolledTo(ref, callback, condition = 0) {
    const cmpEnter = () => {
        if(ref.current.getBoundingClientRect().top <= condition ) {
           callback();
           window.removeEventListener('scroll', cmpEnter)
        }
    }
    window.removeEventListener('scroll', cmpEnter);
    window.addEventListener('scroll', cmpEnter);
}

export function useScrolledTo(element, triggerBoundry) {
    const [scrolledTo, setScrolledTo] = useState(false);
    
    useEffect( () => {
        monitorIfScrolledTo(element, ()=> setScrolledTo(true), triggerBoundry )
    }, [element, triggerBoundry]);

    return scrolledTo;
}