const hero = document.querySelector('.hero')
const content = document.querySelector('.content')
const card = document.querySelectorAll('.card')
const right = document.querySelectorAll('.right')
const headerProject = document.querySelector('#headerProject')
const aside = document.querySelector('#about')

const tl = new TimelineMax();

tl.fromTo(hero,1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
.fromTo(content,1, {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, "-=1")
.fromTo(card, 1.2, {x: '-100%'}, {x:'0%', ease: Power2.easeInOut}, "-= 0.5")
.fromTo(right, 1.2, {x: '100%'}, {x:'0%', ease: Power2.easeInOut}, "1.2")
.fromTo(headerProject, 1.2, {y: '20%'}, {y:'0%', ease: Power2.easeInOut}, "1.2")
.fromTo(card, 1.2, {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, "-=1.2")
.fromTo(right,1.2 , {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, "-=1.2")
.fromTo(headerProject, 1.2 , {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, "-=1.2")
.fromTo(aside, 1.2 , {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, "-=1.2")

const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
}

navSlide();

const scroll = new SmoothScroll('.nav a[href*="#"]', {
    speed: 800
});
