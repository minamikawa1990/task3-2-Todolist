'use strict'

{
    const add = document.getElementById('add');
    const input = document.getElementById('input');
    const tbodyTasks = document.getElementById('tasks');
    const todos = [];

    const createBtnWorking = (status, row) => {
        const btnWorking = document.createElement('button');
        btnWorking.textContent = '作業中';
        status.appendChild(btnWorking);
        // btnWorking.addEventListener('click', () => {
        // }
        return btnWorking;
    };

    const createBtnRemove = (remove, row) => {
        const btnRemove = document.createElement('button');
        btnRemove.textContent = "削除";
        remove.appendChild(btnRemove);
        btnRemove.addEventListener('click', () => {
            const index = row.rowIndex - 1;
            todos.splice(index, 1);
            displayTodos();
        });
        return btnRemove;
    };

    function displayTodos() {
        tbodyTasks.innerText = "";
        todos.forEach(todo => {
            const todoId = tbodyTasks.rows.length;//tbody内の行の個数をId番号に指定
            const row = tbodyTasks.insertRow(-1);//変数rowをtbodyTasksの最終行に追加
            row.classList.add('tasks');//rowにtasksクラスをつける
            const id = row.insertCell(0);//変数idをrowの1番目に挿入
            const comment = row.insertCell(1);//変数commentをrowの2番目に挿入
            const status = row.insertCell(2);//変数statusをrowの3番目に挿入
            const remove = row.insertCell(3);//変数removeをrowの4番目に挿入
            id.innerText = todoId;//idのテキストをtodoIdに指定
            comment.innerText = todo.task;//コメントのテキストをオブジェクトの値で指定
            // status.innerText = todo.status;//コメントのテキストをオブジェクトの値で指定
            createBtnRemove(remove, row);
            createBtnWorking(status, row);
            });
    }

    function addTask() {
        const todo = {
            task: input.value,
            status: '作業中'
        };
        todos.push(todo);
        displayTodos();
        input.value = "";
    }

    add.addEventListener('click', () => {
        addTask();
    })
    
}


