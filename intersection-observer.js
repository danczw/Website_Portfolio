const headerSection = document.querySelector('.header');
const welcomeMenu = document.querySelector('.welcomeMenu');
const portfolioMenu = document.querySelector('.portfolioMenu');
const kontaktMenu = document.querySelector('.kontaktMenu');
const welcomeSection = document.querySelector('.welcome-wrapper');
const portfolioSection = document.querySelector('.portfolio-items-wrapper');
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const kontaktSection = document.querySelector('.kontakt-wrapper')

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

// faders action
const appearOptions = {
    threshold: 0,
    rootMargin: '-150px 0px -150px 0px'
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
const navOptions = {
    threshhold: 0,
    rootMargin: '-300px 0px 0px 0px'
};

const welcomeNavActive = new IntersectionObserver(function(
    entries, welcomeNavActive) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                welcomeMenu.classList.add('active-nav-link');
                portfolioMenu.classList.remove('active-nav-link');
                kontaktMenu.classList.remove('active-nav-link');
            } else {
                welcomeMenu.classList.remove('active-nav-link');
            }
        });
    }, navOptions);

welcomeNavActive.observe(welcomeSection)

const portfolioNavActive = new IntersectionObserver(function(
    entries, welcomeNavActive) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                portfolioMenu.classList.add('active-nav-link');
                welcomeMenu.classList.remove('active-nav-link');
                kontaktMenu.classList.remove('active-nav-link');
            } else {
                portfolioMenu.classList.remove('active-nav-link');
            }
        });
    }, navOptions);

portfolioNavActive.observe(portfolioSection)

const kontaktNavActive = new IntersectionObserver(function(
    entries, welcomeNavActive) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                kontaktMenu.classList.add('active-nav-link');
                portfolioMenu.classList.remove('active-nav-link');
                welcomeMenu.classList.remove('active-nav-link');
            } else {
                kontaktMenu.classList.remove('active-nav-link');
            }
        });
    }, navOptions);

kontaktNavActive.observe(kontaktSection)