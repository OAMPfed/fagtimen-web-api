const draggable = document.getElementById('draggable');
const droppables = document.querySelectorAll('.tile:not(.draggable)');

draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('dragging');
});

draggable.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
});

droppables.forEach((droppable) => {
    droppable.addEventListener('dragover', (e) => {
        console.log('hei verden')
        e.preventDefault();
    });

    droppable.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedElementId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedElementId);

        droppable.textContent = '💩';
    });
});