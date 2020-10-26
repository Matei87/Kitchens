
//HEADER SLIDER
new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
}).mount();


//REVIEWS SLIDER
new Splide('#splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    classes: {
        arrows: 'splide__arrows your-class-arrows',
        arrow: 'splide__arrow your-class-arrow',
        prev: 'splide__arrow--prev arrow-prev',
        next: 'splide__arrow--next arrow-next',
    },
}).mount();


//MENU
let menu = document.getElementById('menu');
let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function () {
    menu.classList.toggle('active');
});