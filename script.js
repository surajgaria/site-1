let cursor = document.querySelector('.cursor');
let cursorBlur = document.querySelector('.cursor-blur');

document.addEventListener('mousemove', function (dets) {
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';
    cursorBlur.style.left = dets.x - 200 + 'px';
    cursorBlur.style.top = dets.y - 200 + 'px';
})




gsap.to('.nav', {
    height: '90px',
    backgroundColor: '#000',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.nav',
        scroller: 'body',
        start: 'top -10%',
        end: 'top -11%',
        scrub: 2
    }
})

gsap.to('.main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '.main',
        scroller: 'body',
        scrub: 2,
        start: 'top -30%',
        end: 'top -80%'
    }
})