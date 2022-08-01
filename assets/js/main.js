const pointsBtn = document.querySelectorAll('#points-btn');
const markBtn = document.querySelectorAll('#mark-btn');

const crossOutTask = (element) => {
    const taskID = element.dataset.taskId;
    const parentNode = getParentNode(element);
    const title = parentNode.querySelector('.task-header h2');
    const description = parentNode.querySelector('.task-body p');
    title.classList.toggle('task-completed');
    description.classList.toggle('task-completed');
    element.textContent = element.textContent === 'mark completed' ? 'dismark compled' : 'mark completed';
}

const getParentNode = (node) => {
    return node.parentNode.parentNode;
}

document.addEventListener('DOMContentLoaded', () => {
    pointsBtn.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            const parentElemet = getParentNode(target);
            const elementStyles = window.getComputedStyle(parentElemet);
            const currentHeight = parseInt(elementStyles.getPropertyValue('max-height').replace('px', ''));
            parentElemet.style.maxHeight = `${currentHeight === 42 ? parentElemet.scrollHeight : 42}px`;
        });
    });

    markBtn.forEach(btn => {
        btn.addEventListener('click', ({ target }) => {
            crossOutTask(target);
        });
    });
}); 