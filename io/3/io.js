const highlighter = document.getElementById('highlighter');

const options = {
    root: highlighter,
    rootMargin: '0px',
    threshold: 1,
};

const observer = new IntersectionObserver(handleIntersection, options);

function handleIntersection(entries) {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.style.backgroundColor = 'green';
    } else {
        entry.target.style.backgroundColor = 'lightblue';
    }
    });
}

const observableDivs = document.querySelectorAll('.observable');

observableDivs.forEach((div) => {
    observer.observe(div);
});

document.addEventListener('mousemove', (e) => {
    highlighter.style.left = (e.clientX - 25) + 'px';
    highlighter.style.top = (e.clientY - 25) + 'px';

    observableDivs.forEach((div) => {
    const rect1 = highlighter.getBoundingClientRect();
    const rect2 = div.getBoundingClientRect();
    const isIntersecting = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );

    if (isIntersecting) {
        div.style.backgroundColor = 'yellow';
    } else {
        div.style.backgroundColor = 'lightblue';
    }
    });
});