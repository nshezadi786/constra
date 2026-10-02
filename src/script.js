export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


export function initScrollEffects(callback) {
    const handleScroll = () => {
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        const height = navbar ? navbar.offsetHeight : 0;

     
        const threshold = height > 0 ? height + 100 : 200; 

        if (typeof callback === 'function') {
            callback({
                isFixed: scrollPos > threshold, 
                isVisible: scrollPos > 400,   
                navbarHeight: height
            });
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}

