if (!localStorage.getItem('todoList'))
    localStorage.setItem('todoList', []);

if (!localStorage.getItem('notodoList'))
    localStorage.setItem('notodoList', []);

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#todo').disabled = true;
    document.querySelector('#notodo').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        if(document.querySelector('#task').value.length > 0)
        {
            document.querySelector('#todo').disabled = false;
            document.querySelector('#notodo').disabled = false;
        }
            
        else
        {
            document.querySelector('#todo').disabled = true;
            document.querySelector('#notodo').disabled = true;
        }
    };

    const button = document.querySelectorAll('button');

    const todo = document.querySelector('#todo');
    const notodo = document.querySelector('#notodo');

    todo.onclick = () => {
        
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        document.querySelector('.todo__list').append(li)

        todoList.append(li.innerHTML);
        localStorage.setItem('todoList', []);

        document.querySelector('#todo').disabled = true;
        document.querySelector('#notodo').disabled = true;

        document.querySelector('#task').value = '';

        return false;
    };

    notodo.onclick = () => {

        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        document.querySelector('.notodo__list').append(li)

        notodoList.append(li.innerHTML);
        localStorage.setItem('notodoList', NodeList);

        document.querySelector('#todo').disabled = true;
        document.querySelector('#notodo').disabled = true;

        document.querySelector('#task').value = '';

        return false;
    };
});