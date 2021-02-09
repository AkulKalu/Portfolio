
export function animateOnScroll(cmpId, setState, condition = window.innerHeight) {
    const cmpEnter = () => {
        const cmp = document.getElementById(cmpId);
        if(cmp.getBoundingClientRect().bottom < condition) {
            setState({
                scrolledTo: true
            })
            window.removeEventListener('scroll',cmpEnter)
        }
    }
    window.addEventListener('scroll', cmpEnter);
}

