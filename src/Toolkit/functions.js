export function scrollTo(elementId) {
    return {
        scroll : () => document.getElementById(elementId).scrollIntoView(true, {behavior : 'smooth'})
    } 
}


