const ticTacToe = document.getElementById('tic-tac-toe');
const cells = ticTacToe.querySelectorAll('.cell');

let currentPlayer = 'X';

cells.forEach((cell) => {
    cell.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
        e.target.classList.add('dragging');
    });

    cell.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });

    cell.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    cell.addEventListener('drop', (e) => {
        e.preventDefault();
        const sourceIndex = e.dataTransfer.getData('text/plain');
        const targetIndex = e.target.dataset.index;

        if (cellHasValue(targetIndex)) {
            return;
        }

        if (currentPlayer === 'X') {
            e.target.textContent = 'X';
            e.target.classList.add('x');
        } else {
            e.target.textContent = 'O';
            e.target.classList.add('o');
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});

function cellHasValue(index) {
    return cells[index].textContent === 'X' || cells[index].textContent === 'O';
}