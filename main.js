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
    const remove = document.getElementsByClassName('remove');


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
        return btnRemove;
    }

    // todoを表示する関数（番号、コメント、状態ボタン、削除ボタン）
    function displayTodos() {
        const trItem = document.createElement('tr');
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

    }

    // todoを追加する関数
    function todoAdd() {
            const todo = {
                task: input.value,
                status: "作業中",
            }
            todos.push(todo);
            console.log(todos);
    }

    //削除ボタン押下時にその行を消す関数
    function removeBtn() {
        for (let i = 0; i < remove.length; i++) {
            remove[i].addEventListener('click', () => {
                trClass[i].remove();
            });
        }
    }

// 処理

    add.addEventListener('click', () => {
        todoAdd();
        displayTodos();
        
    })



    // //タスクを表示する関数
    // function displayTodos() {
        
    //     const todo = {
    //         task: input.value,
    //         status: "作業中",
    //     }

    //     // 配列に格納
    //     todos.push(todo);

    //     // tr要素をtbodyに追加
    //     const trItem = document.createElement('tr');
    //     trItem.classList.add('tr');
    //     tbodyTasks.appendChild(trItem);


    //     // IDの作成
    //     const tdId = document.createElement('td');
    //     for (let i = 0; i < todos.length; i++) {
    //         tdId.id = i;
    //     }
    //     trItem.appendChild(tdId);
    //     tdId.textContent = tdId.id;
            
    //      //コメントの追加
    //      const comment = document.createElement('td');
    //      comment.textContent = todo.task;
    //      trItem.appendChild(comment);
 
    //      //ボタンの追加（作業中）
    //      const tdWorking = document.createElement('td');
    //      const btnWorking = document.createElement('button');
    //      trItem.appendChild(tdWorking);
    //      tdWorking.appendChild(btnWorking);
    //      btnWorking.textContent = todo.status;
    //      console.log(tdWorking);
         
    //      //ボタンの追加（削除）
    //      const tdRemove = document.createElement('td');
    //      const btnRemove = document.createElement('button');
    //      trItem.appendChild(tdRemove);
    //      tdRemove.appendChild(btnRemove);
    //      btnRemove.textContent = '削除';
    //      btnRemove.id = tdId;
    //      btnRemove.classList.add('remove');
    //      console.log(tdRemove);
 
    //      console.log(todos);
    //      input.value = "";
    // }

    // // 削除ボタン押下時にその行を消す関数
    // function removeButton() {
    //     const trClass = document.getElementsByClassName('tr');
    //     for (let i = 0; i < trClass.length; i++) {
    //         trClass[i].addEventListener('click', () => {
    //             trClass[i].remove();
    //         });
            
    //     }
    // }
    
    // // クリックイベント
    // add.addEventListener('click' , () => {
    //     displayTodos();

    //     removeButton();
       
    // })
    
    

}