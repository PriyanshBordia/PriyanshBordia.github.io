document.addEventListener('DOMContentLoaded', () => {

    setDisabled(true);

    var todoList = new Array();
    var notodoList = new Array();

    if (!localStorage.getItem('todoList'))
        localStorage.setItem('todoList', JSON.stringify(todoList));
    else
    {
        todoList = JSON.parse(localStorage.getItem('todoList'));

        for (var i = 0; i < todoList.length; i++)
        {
            const li = addTaskToList(todoList[i]);
            document.querySelector('.todo__list').append(li);

            const last_li = document.querySelector('.todo__list > li:last-child');

            const bin = document.createElement('i');
            bin.className = 'far fa-trash-alt';
            bin.value = 'b' + String(i);
            last_li.append(bin);

            const pencil = document.createElement('i');
            pencil.className = 'fas fa-pencil-alt';
            pencil.value = 'p' + String(i);
            last_li.append(pencil);
        }
    }

    if (!localStorage.getItem('notodoList'))
        localStorage.setItem('notodoList', JSON.stringify(notodoList));
    else
    {
        notodoList = JSON.parse(localStorage.getItem('notodoList'));

        for (var i = 0; i < notodoList.length; i++)
        {
            const li = addTaskToList(notodoList[i]);
            document.querySelector('.notodo__list').append(li);

            const last_li = document.querySelector('.notodo__list > li:last-child');

            const bin = document.createElement('i');
            bin.className = 'far fa-trash-alt';
            bin.value = 'b' + String(i);
            last_li.append(bin);

            const pencil = document.createElement('i');
            pencil.className = 'fas fa-pencil-alt';
            pencil.value = 'p' + String(i);
            last_li.append(pencil);
        }
    }
    
    document.querySelector('#task').onkeyup = () => {

        if((document.querySelector('#task').value.trim()).length > 0)
            setDisabled(false);
        else
            setDisabled(true);
    };

    // const button = document.querySelectorAll('button');

    document.querySelector('#todo').onclick = () => {
        
        task = document.querySelector('#task').value.trim();

        const li = addTaskToList(task);
        document.querySelector('.todo__list').append(li);
        
        const last_li = document.querySelector('.todo__list > li:last-child');

        const bin = document.createElement('i');
        bin.className = 'far fa-trash-alt';
        bin.value = 'b' + String(todoList.length - 1);
        last_li.append(bin);

        const pencil = document.createElement('i');
        pencil.className = 'fas fa-pencil-alt';
        pencil.value = 'p' + String(todoList.length - 1);
        last_li.append(pencil);
       
        todoList.push(String(task));
        localStorage.setItem('todoList', JSON.stringify(todoList));

        setDisabled(true);

        document.querySelector('#task').value = '';

        return false;
    };

    document.querySelector('#notodo').onclick = () => {

        task = document.querySelector('#task').value.trim();

        const li = addTaskToList(task);
        document.querySelector('.notodo__list').append(li);

        const last_li = document.querySelector('.notodo__list > li:last-child');

        const bin = document.createElement('i');
        bin.className = 'far fa-trash-alt';
        bin.value = 'b' + String(notodoList.length - 1);
        last_li.append(bin);
        
        const pencil = document.createElement('i');
        pencil.className = 'fas fa-pencil-alt';
        pencil.value = 'p' + String(notodoList.length - 1);
        last_li.append(pencil);

        notodoList.push(String(task));
        localStorage.setItem('notodoList', JSON.stringify(notodoList));

        setDisabled(true);

        document.querySelector('#task').value = '';

        return false;
    };

    document.querySelectorAll('.bin').onclick = () => {
        console.log('in fas');
    };

    document.querySelectorAll('.pencil').onclick = () => {
        console.log('in far');
    };

    function setDisabled(value) {
        document.querySelector('#todo').disabled = value;
        document.querySelector('#notodo').disabled = value;
    };

    function addTaskToList(taskName) {

        var li = document.createElement('li');
        li.innerHTML = taskName;
        return li;
    }; 

    function removeTaskFromList(list, taskId) {
        
        list.splice(taskId, 1);
    };
});