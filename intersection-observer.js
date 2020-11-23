const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
const headerSection = document.querySelector('.header');
const welcomeSection = document.querySelector('.welcome-wrapper');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

// portfolio items darken action
const portfolioItemOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-50px'
};

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    });

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    });
});

const portfolioItemObserver = new IntersectionObserver(function
    (entries, portfolioItemObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }
            console.log(entry.target);
            portfolioItemObserver.unobserve(entry.target)
        });
    }, portfolioItemOptions);

portfolioItems.forEach(portfolioItem => {
    portfolioItemObserver.observe(portfolioItem)
});

// nav bar actions
const contentWrapperOptions = {
    rootMargin: '-300px 0px 0px 0px'
};

const contentWrapperObserver = new IntersectionObserver(function(
    entries, contentWrapperObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                headerSection.classList.add('header-scroll')
            } else {
                headerSection.classList.remove('header-scroll')
            };
        })
    }, contentWrapperOptions);

contentWrapperObserver.observe(welcomeSection);

// faders action
const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
    entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            };
        })
    }, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// sliders action
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

// active nav action
// const welcomeMenu = document.querySelector('.welcomeMenu');

// const navOptions = {
//     threshold: 0,
// };

// const navActive = new IntersectionObserver(function(
//     entries, navActive) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 console.log('active');
//             } else {
//                 console.log('not active');;
//             }
//         });
//     }, navOptions);

// navActive.observe(welcomeSection)