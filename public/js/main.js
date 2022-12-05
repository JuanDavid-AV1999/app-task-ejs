const markBtn = document.querySelectorAll('#check-btn');
const pointsBtn = document.querySelectorAll('#points-btn');

const crossOutTask = async (element) => {
    const { id, state } = element.dataset;
    const request = await fetch('/app/check-task', {
        method: 'POST',
        body: JSON.stringify({ id, state }),
        headers: { 'Content-Type': 'application/json' }
    });
    const response = await request.json();
    const { payload } = response;
    const icon = payload === 'C' ? '/static/img/icon-close.png' : '/static/img/icon-done.png';
    const title = getParentNode(element).querySelector('.task-header h2');
    const description = getParentNode(element).parentNode.querySelector('.task-body p');
    element.dataset.state = payload;
    element.firstElementChild.src = icon;
    title.classList.toggle('task-completed');
    description.classList.toggle('task-completed');
}

const getParentNode = (node, depth = false) => {
    const element = node.parentNode.parentNode
    return !depth ? element : element.parentNode;
}

document.addEventListener('DOMContentLoaded', () => {
    pointsBtn.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            const parentElemet = getParentNode(target, true);
            const elementStyles = window.getComputedStyle(parentElemet);
            const currentHeight = parseInt(elementStyles.getPropertyValue('max-height').replace('px', ''));
            parentElemet.style.maxHeight = `${currentHeight === 50 ? parentElemet.scrollHeight : 50}px`;
        });
    });

    markBtn.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const { target } = e;
            await crossOutTask(target);
        });
    });
}); 