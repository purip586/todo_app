


window.addEventListener('load', () => {

    task = JSON.parse(localStorage.getItem('todos')) || [];
    
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        window.localStorage.setItem('todos', JSON.stringify(task));
        
        if(!task){
            alert('please add a task');
            return;
        }
                
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        
        task_el.appendChild(task_content_el);

        //task order list in input
        // const task_ol_el = document.createElement('ol');
        // task_content_el.appendChild(task_ol_el); 
        // task_ol_el.appendChild(task_input_el);

        // const orderList = task_ol_el;

        // for(i=0;i<orderList.length;i++) {

        // }

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');
        
        task_content_el.appendChild(task_input_el);


        //task action button
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';

        const task_done_el = document.createElement('button');
        task_done_el.classList.add('done');
        task_done_el.innerHTML = '<i class="fa fa-check"></i>';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_done_el);

        task_el.appendChild(task_actions_el);
        
        list_el.appendChild(task_el);

        input.value = '';

        task_edit_el.addEventListener('click', () => {
        if (task_edit_el.innerText.toLowerCase() == 'edit') {
            task_input_el.removeAttribute('readonly');
            task_input_el.focus();
            task_edit_el.innerText = 'Save';
        }
        else{
            task_input_el.setAttribute('readonly', 'readonly');
            task_edit_el.innerText = 'Edit';
        }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        task_done_el.addEventListener('click', () => {

            if(task_el.style.textDecoration == "") {
                task_el.style.textDecoration = "line-through";
            } 
            else{
                task_el.style.textDecoration = "";
            }
        });

    });


});