document.addEventListener('DOMContentLoaded', () => {
    const scrollShowElements = document.getElementsByClassName('float-contact-flex');

    const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const triggerPosition = 150; 

        for (let i = 0; i < scrollShowElements.length; i++) {
            const element = scrollShowElements[i];

            if (scrollPosition > triggerPosition) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
});


