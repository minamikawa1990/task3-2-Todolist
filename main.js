'use strict'

{

    // 追加ボタンを押下時にタスクを登録できる

    const add = document.getElementById('add');
    const input =document.getElementById('input');
    const tbodyTasks = document.getElementById('tasks');
    const todos = [];
    const btnRemove = document.createElement('button');
    const tdRemove = document.createElement('td');
    const trClass = document.getElementsByClassName('tr');
    const removeClass = document.getElementsByClassName('remove');


// 関数一覧

    // 作業ボタンを作成する関数
    function createBtnWorking() {
        const btnWorking = document.createElement('button');
        btnWorking.textContent = "作業中";
        return btnWorking;
    }
    // 削除ボタンを作成する関数
    function createBtnRemove() {
        const btnRemove = document.createElement('button');
        btnRemove.textContent = "削除";
        btnRemove.classList.add('remove');
        return btnRemove;
    }

    // todoを表示する関数（番号、コメント、状態ボタン、削除ボタン）
    function displayTodos() {
        const trItem = document.createElement('tr');
        trItem.classList.add('tr');
        tbodyTasks.appendChild(trItem);
        const comment = document.createElement('td');
        const tdWorking = document.createElement('td');
        const tdRemove = document.createElement('td');
        trItem.appendChild(comment);
        trItem.appendChild(tdWorking);
        trItem.appendChild(tdRemove);
        tdWorking.appendChild(createBtnWorking());
        tdRemove.appendChild(createBtnRemove());
        comment.textContent = input.value;
        console.log(trItem);
    }

    // todoを追加する関数
    function addTask() {
            const todo = {
                task: input.value,
                status: "作業中",
            }
            todos.push(todo);
            console.log(todos);

            displayTodos();
    }

    //削除ボタン押下時にその行を消す関数(todoを削除する関数)
    function removeBtn() {
        for (let i = 0; i < removeClass.length; i++) {
            removeClass[i].addEventListener('click', () => {
                trClass[i].remove();
                todos.splice(i, 1);
                return i;
            });
        }
    }

// 処理


    add.addEventListener('click', () => {
        addTask();
        
        removeBtn();
    })
}