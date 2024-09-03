// script.js

document.getElementById('shopNow').addEventListener('click', function() {
    window.location.href = '#products';
});

// script.js

const scroller = document.querySelector('.scroller');

scroller.addEventListener('mouseover', () => {
    scroller.style.animationPlayState = 'paused';
});

scroller.addEventListener('mouseout', () => {
    scroller.style.animationPlayState = 'running';
});
