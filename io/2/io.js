let timer = null;
let startTime = null;
let timerPaused = false;

function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        console.log(entry)
        const box = document.querySelector('.box');
        if (entry.isIntersecting) {
            if (!timer) {
                if (timerPaused) {
                    startTime += new Date().getTime() - pauseTime; 
                    timerPaused = false; 
                } else {
                    startTime = new Date().getTime();
                }
                timer = setInterval(() => {
                    const currentTime = new Date().getTime();
                    const elapsedTime = (currentTime - startTime) / 1000; 
                    box.textContent = `Seconds in view: ${elapsedTime.toFixed(1)}`;
                }, 100); 
            }
        } else {
            if (timer) {
                clearInterval(timer);
                timer = null; 
                timerPaused = true;
                pauseTime = new Date().getTime(); 
            }
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
});

const box = document.querySelector('.box');

observer.observe(box);