import { sneakers } from "./sneakers.js";

/////GSAP Animations//////

//Header Animations
const tl = gsap.timeline();
const title = document.querySelector('.title');
const titleFullWidth = title.getBoundingClientRect().width;

const img1 = document.querySelector('.header-img');

const subtitle = document.querySelector('.subtitle');
const desc = document.querySelector('.desc');
const readmore = document.querySelector('.readmore');
const borderBottom = document.querySelector('.border-bottom');

gsap.set('.logo', {transformOrigin: 'center'})

tl.fromTo('.overlay', {x: 0}, {x: '-100%', duration: 0.7, stagger: 0.3});
tl.fromTo('.logo', {scale: 0}, {scale: 1, duration: 1, ease: "elastic.out(1, 0.3)"});
tl.fromTo('.menu-links ul li', {opacity: 0}, {opacity: 1, duration: 0.5, stagger: 0.2}, '<')
tl.fromTo('.nav i', {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.2}, '<70%');
tl.fromTo('.border-bottom', {opacity: 0}, {opacity: 1, duration: 0.5}, '<50%')
tl.fromTo(title, {width: 0}, {width: `${titleFullWidth}px`, duration: 0.7}, '<')

tl.fromTo(img1, {opacity: 0, x: 200}, {opacity: 1, x: 0, duration: 0.7},'<')


tl.fromTo(subtitle, {opacity: 0, x:'-200px'}, {opacity: 1, x:0, duration: 0.5}, '<50%')
tl.fromTo(desc, {opacity: 0, x:'-200px'}, {opacity: 1, x:0, duration: 0.5}, '<')
tl.fromTo(readmore, {opacity: 0, x:'-200px'}, {opacity: 1, x:0, duration: 0.5}, '<')









/////Dynamically Add Sneakers//////
const sneakersGrid = document.querySelector('.new-arrivals-grid');

/*const addSneakers = () => {
    const newSneakers = sneakers.map((sneaker) => {
        const {image, shoe} = sneaker;
        return `
        <div class="new-arrival-item">
            <img src="${image}" alt="">
            <p class="shoe-name">${shoe}</p>
            <p class="shoe-price">$12.99</p>
        </div>
        `
    }).join('');

    sneakersGrid.innerHTML = newSneakers;

    //Page 2 Animations
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.new-arrivals',
            start: '-60%', 
            end: '20%',
            scrub: true,
        }
    })

    tl2.fromTo('.new-arrival-item', {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.3})
}

window.addEventListener('DOMContentLoaded', () => {
    addSneakers();
})*/




//////Page 3 Animations/////
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.brands-section',
        start: '-10%',
        //markers: {startColor: 'orange', endColor: 'orange'},
        }
    })

tl3.fromTo('.brand-item1 img', {opacity: 0, x:'100%'}, {opacity: 1, x: 0, duration: 0.7})
tl3.fromTo('.brand-item1 .brand-item-content', {opacity: 0, y:'50px'}, {opacity: 1, y: 0, duration: 0.7}, '<');

tl3.fromTo('.brand-item2 img', {opacity: 0, x:'-100%'}, {opacity: 1, x: 0, duration: 0.7}, '<20%')
tl3.fromTo('.brand-item2 .brand-item-content', {opacity: 0, y:'50px'}, {opacity: 1, y: 0, duration: 0.7}, '<');

tl3.fromTo('.brand-item3 img', {opacity: 0, x:'100%'}, {opacity: 1, x: 0, duration: 0.7}, '<')
tl3.fromTo('.brand-item3 .brand-item-content', {opacity: 0, y:'50px'}, {opacity: 1, y: 0, duration: 0.7}, '<');
 
tl3.fromTo('.brand-item4 img', {opacity: 0, x:'-100%'}, {opacity: 1, x: 0, duration: 0.7}, '<')
tl3.fromTo('.brand-item4 .brand-item-content', {opacity: 0, y:'50px'}, {opacity: 1, y: 0, duration: 0.7}, '<');



///////Page 4 Animations////
const location1 = document.querySelector('.manhattan');
const location2 = document.querySelector('.brooklyn');

const location1Width = location1.getBoundingClientRect().width;
const location2Width = location2.getBoundingClientRect().width;



const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.locations',
        start: '-28%',
        end: '100%',
        //markers: {startColor: 'brown', endColor: 'brown'},
    }
})

tl4.fromTo(location1, {width: 0}, {width: `${location1Width}px`, duration: 0.7})
tl4.fromTo(location2, {width: 0}, {width: `${location2Width}px`, duration: 0.7})
