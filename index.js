let tempo=document.querySelector('#time');
let c=0;
let i=0;

//Inizialise the timeline
var tl = gsap.timeline();

//The animations 
window.onclick=function start_animation(){
    document.querySelector('#hide_block').style.zIndex='1';
tl.from('#hide_block', {opacity:0,xPercent: -100});
tl.to('#hide_block', {opacity:1,xPercent: 0, duration: .8,ease: 'expo.inOut'});
tl.to('#hide_block', {opacity:1,xPercent: 100, duration: .8,ease: 'expo.inOut'});
    setTimeout(  a, 680);
}

function finish_animation(){
tl.to('#hide_block', {opacity:1,xPercent: 200, duration: .8,ease: 'expo.inOut'});
tl.to('#hide_block', {opacity:0,xPercent: 250, duration: .8,ease: 'expo.inOut'});
    document.querySelector('#hide_block').style.zIndex='0';
}

const a=async function date () {
    document.querySelector('#time').style.zIndex='1';
    document.querySelector('#time').style.color='white';
    tl.from('#time', {fontSize: 30,opacity:1,y: 20,duration:.0});
    tl.to('#time', {fontSize: 45,opacity:1,y: window.innerHeight/5, duration:.8,ease: 'expo.inOut'});
    tl.to('#time', {fontSize: 30,opacity:1,y: 20, duration: .9,ease: 'expo.inOut'});
    
    for (let i = 1961; i < 1989; i++) {
            await increment_number();// wait 100 ms, then print 
            tempo.innerHTML=i;
    } //if you want to take the screen size use window.screen.height for y and .width for x
    finish_animation();
};

function increment_number() {
    return new Promise((resolve, reject) => {
            setTimeout(resolve, 50);
    });
}


