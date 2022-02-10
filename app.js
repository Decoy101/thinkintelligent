//NavBar

const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
         //Burger animation
    burger.classList.toggle('toggle'); 
    }); 
}
navSlide();

// const tl = gsap.timeline({defaults:{ease:"power1.out"}})

// tl.to(".text",{y: "0%", duration: 1, stagger: 0.25})
// tl.to(".text",{y: "100%", duration: 1})
// tl.to(".intro-text",{display: "none"},'-=1')
// tl.to(".text1",{y: "0%", duration: 1, stagger: 0.25})
// tl.to('.slider',{y: "-100%", duration: 1.5, delay: 0.5})
// tl.to('.intro',{y:"-100%", duration: 1},"-=1")
// tl.fromTo('nav',{opacity: 0},{opacity: 1, duration: 1})
// tl.fromTo('.big-text',{opacity: 0},{opacity: 1, duration: 1},'-=1')