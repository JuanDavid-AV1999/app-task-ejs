const form = document.getElementById('create-form');
const taskFields = document.querySelectorAll('#task-field');
const formAcions = document.getElementById('formActions');

const cleanFields = () => taskFields.forEach(item => item.value = '');

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const { target } = e;
        const { action }  = target.dataset;
        const { id, title, description } = Object.fromEntries(new FormData(target));

        let url = '/app/';
        let method = '';
        let body = '';
        let redirect = false;
        let msg = { success: '', error: '' };

        switch(action) {
            case 'create':
                url += '/create-task';
                method = 'POST';
                body = JSON.stringify({ title, description });
                msg.success = 'Se creo correctamente la tarea';
                msg.error = 'Error insesperado al crear la tarea';
                break;
            case 'update':
                url += '/update-task'
                method = 'PUT';
                body = JSON.stringify({ id, title, description });
                redirect = true;
                msg.success = 'Se actualizo correctamente la tarea';
                msg.error = 'Error insesperado al actualizar la tarea';
                break;
            case 'delete':
                url += '/delete-task';
                method = 'DELETE';
                body = JSON.stringify({ id });
                redirect = true;
                msg.success = 'Se elimino correctamente la tarea';
                msg.error = 'Error insesperado al aliminar la tarea';
                break;
        }
        
        const respose = await fetch(url, { method, body, headers: { 'Content-Type': 'application/json' } });

        if(!respose.error) {
            alert(msg.success);
            if(!redirect) cleanFields();
            else window.location = '/app/';
        } else alert(msg.error);
    });

    formAcions.addEventListener('click', ({ target }) => {
        if(target.classList.contains('btn')) {
            const { action } = target.dataset;
            form.dataset.action = action;
        }
    });
});