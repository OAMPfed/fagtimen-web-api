 let windowResizeCounter = 0;
 let resizeObserverCounter = 0;

 function updateTopCounter() {
   windowResizeCounter++;
   const topElementCounter = document.querySelector('#topElement .counter');
   topElementCounter.textContent = windowResizeCounter;
 }

 function updateBottomCounter() {
   resizeObserverCounter++;
   const bottomElementCounter = document.querySelector('#bottomElement .counter');
   bottomElementCounter.textContent = resizeObserverCounter;
 }

 window.addEventListener('resize', () => {
   updateTopCounter();
 });

 const resizeObserver = new ResizeObserver(updateBottomCounter);
 resizeObserver.observe(document.getElementById('bottomElement'));