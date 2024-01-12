function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.add('inverted');
        entry.target.querySelector('p').textContent = 'Not Observed';
      } else {
        entry.target.classList.remove('inverted');
        entry.target.querySelector('p').textContent = 'Observed';
      }
    });
  }
  

const options = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 1,
};


const observer = new IntersectionObserver(handleIntersection, options);


const observableDivs = document.querySelectorAll('.observable');

observableDivs.forEach((div) => {
  observer.observe(div);
});
  