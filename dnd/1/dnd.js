const draggable = document.getElementById('draggable');
const droppables = document.querySelectorAll('.droppable');
const errorArea = document.getElementById('droppable4');

draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
}); 

droppables.forEach((droppable) => {
    droppable.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    droppable.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedElementId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedElementId);

        if (droppable === errorArea) {
            throw Error("can't drop here")
        } else {
            droppable.appendChild(draggedElement);
        }
    });
});