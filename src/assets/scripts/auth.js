import preloader from './modules/preloader';

const parallaxContainer = document.getElementById('parallax');
const layers = parallaxContainer.children;

const moveLayers = e => {
    const initialX = window.innerWidth / 2 - e.pageX;
    const initialY = window.innerHeight / 2 - e.pageY;

    Array.from(layers).forEach((layer, i) => {
        const divider = i / 100;
        const positionX = initialX * divider;
        const positionY = initialY * divider;

        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
};

window.addEventListener('mousemove', moveLayers);

preloader();
