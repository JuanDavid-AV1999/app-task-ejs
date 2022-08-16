const markBtn = document.querySelectorAll('#check-btn');
const createForm = document.getElementById('create-form');
const pointsBtn = document.querySelectorAll('#points-btn');

const httpRequest = async (url, payload, method = 'GET') => {
    const options = {};
    options['method'] = method;
    if(payload) {
        options['body'] = JSON.stringify(payload);
        options['headers'] = {
            'Content-Type': 'application/json'
        };
    }
    const request = await fetch(url, options);
    const response = await request.json();

    return response;
}

const crossOutTask = async (element) => {
    const { id, state } = element.dataset;
    const request = await fetch('/app/check-task', {
        method: 'POST',
        body: JSON.stringify({ id, state }),
        headers: { 'Content-Type': 'application/json' }
    });
    const response = await request.json();
    element.dataset.state = response.payload;
    const title = getParentNode(element).querySelector('.task-header h2');
    const description = getParentNode(element).parentNode.querySelector('.task-body p');
    title.classList.toggle('task-completed');
    description.classList.toggle('task-completed');
    element.firstElementChild.classList.toggle('task-done');
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

    createForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const { title, description } = Object.fromEntries(new FormData(e.target));
        const response = await httpRequest('/app/create-task', { title, description }, 'POST');
        console.log(response)
    });
}); 