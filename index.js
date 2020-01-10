let tempo=document.querySelector('#time');

//initialize the timeline
var tl = gsap.timeline();

//The animations 
window.onclick=function start_animation(){
    document.querySelector('#time').style.zIndex='1';
    document.querySelector('#hide_block').style.zIndex='1';

tl.from('#hide_block', {opacity:0,xPercent: -100});
tl.to('#hide_block', {opacity:1,xPercent: 0, duration: .8,ease: 'expo.inOut'});
tl.to('#hide_block', {opacity:1,xPercent: 100, duration: .8,ease: 'expo.inOut'});

    setTimeout(a, 40);
}

function finish_animation(){
tl.to('#hide_block', {opacity:1,xPercent: 200, duration: .8,ease: 'expo.inOut'});
tl.to('#hide_block', {opacity:0,xPercent: 250, duration: .8,ease: 'expo.inOut'});

    document.querySelector('#hide_block').style.zIndex='0';
}

const a=async function date () {

    document.querySelector('#contenuto').style.backgroundColor='#001f3f';
    document.querySelector('#time').style.color='white'; //I used it before because I have tried the site with a light image, and I had instead a black color for the font

    tl.from('#time', {fontSize: 30,opacity:1,y: 20,duration:.0});
    tl.to('#time', {fontSize: 45,opacity:1,y: 200, duration:.8,ease: 'expo.inOut'});
    tl.to('#text_reveal', {opacity:1,y: 50, duration:.8,ease: 'expo.inOut'},'-=.4');
    tl.to('#text_reveal', {opacity:0,y: 20, duration:.6,ease: 'expo.inOut'});
    tl.to('#time', {fontSize: 30,opacity:1,y: 20, duration: .9,ease: 'expo.inOut'});
    
    for (let i = 1961; i < 1989; i++) {
            await increment_number();// wait 100 ms, then print 
            tempo.innerHTML=i;
    } //if you want to take the screen size use window.screen.height for y and .width for x

    document.querySelector('#contenuto').style.backgroundColor='rebeccapurple';
 
    finish_animation();
};

function increment_number() {
    return new Promise((resolve, reject) => {
            setTimeout(resolve, 50);
    });
}


