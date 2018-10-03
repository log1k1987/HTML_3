import preloader from './modules/preloader';

preloader();

const slides = [
    {
        title: 'lending 1',
        image: 'assets/images/slider/work-1.png',
        description: '1',
        tags: ['html', 'js'],
        link: '',
    },
    {
        title: 'lending 2',
        image: 'assets/images/slider/work-2.png',
        description: '2',
        tags: ['html', 'js'],
        link: '',
    },
    {
        title: 'lending 3',
        image: 'assets/images/slider/work-3.png',
        description: '3',
        tags: ['html', 'js'],
        link: '',
    },
    {
        title: 'lending 4',
        image: 'assets/images/slider/work-4.png',
        description: '4',
        tags: ['html', 'js'],
        link: '',
    },
];

//const slider = document.querySelector('.js-slider');
const mainSlide = document.querySelector('.js-main-slide');
const upSlide = document.querySelector('.js-scroll-up');
const downSlide = document.querySelector('.js-scroll-down');
const description = document.querySelector('.js-description');
const slideLength = slides.length;
let currentSlide = 0;

function slideLimiter(value) {
    if (value >= slideLength) {
        return 0;
    } else if (value < 0) {
        return slideLength - 1;
    } else {
        return value;
    }
}

function fiilSlier() {
    let prev = slideLimiter(currentSlide - 1);
    let next = slideLimiter(currentSlide + 1);

    mainSlide.src = slides[currentSlide].image;
    console.log();
    upSlide.lastElementChild.src = slides[prev].image;
    downSlide.lastElementChild.src = slides[next].image;
    description.innerText = slides[currentSlide].description;
}

upSlide.addEventListener('click', function() {
    currentSlide = slideLimiter(currentSlide - 1);
    fiilSlier();
});

downSlide.addEventListener('click', function() {
    currentSlide = slideLimiter(currentSlide + 1);
    fiilSlier();
});

fiilSlier();
