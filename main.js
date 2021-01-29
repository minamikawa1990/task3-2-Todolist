'use strict'

{

    //追加ボタンを押下時にタスクを登録できる

    const add = document.getElementById('add');
    const input =document.getElementById('input');
    const tbodyTasks = document.getElementById('tasks');
    const tbodyArray = [];
    

    // tbodyにtr要素を追加
    add.addEventListener('click' , () => {
        // trをtbodyに追加
        
        const trItem = document.createElement('tr');

        tbodyArray.push(trItem);
        tbodyTasks.appendChild(trItem);
        
        // IDとコメントをtdタグで作成
        const td_ID = document.createElement('td');
        const comment = document.createElement('td');
        
        for (let i = 0; i < tbodyArray.length; i++) {
            td_ID.id = i;
        }
        
        td_ID.textContent = td_ID.id;


        comment.textContent = input.value;
        const btn_working = document.createElement('button');
        const btn_remove = document.createElement('button');
        btn_working.textContent = "作業中";
        btn_remove.textContent = "削除";

        // 入力した列にコメント、ボタンなどの情報を付け加えている
        trItem.appendChild(td_ID);
        trItem.appendChild(comment);
        trItem.appendChild(btn_working);
        trItem.appendChild(btn_remove);
        input.value = "";
        
        console.log(tbodyArray);
       
    })

    

   

    
    

    

    // function btnChange () {
    //     　const btn_working = document.createElement('button');
    //       const workings = document.getElementsByClassName('working');
    //     　btn_working.textContent = '作業中';
    //     　workings[0].addEventListener('click', () => {
    //     　　if (btn_working.textContent === '作業中') {
    //     　　　btn_working.textContent = '完了';
    //     　　} else {
    //     　　　btn_working.textContent = '作業中';
    //     　　}
    //     　});
    //     　return btn_working;
    //     };
    

    // const radio_all = document.getElementById('radio_all');
    // const radio_working = document.getElementById('radio_working');
    // const radio_complete = document.getElementById('radio_complete');
    // const add = document.getElementById('add');
    // const ul = document.querySelector('ul');
    // const input_task = document.getElementById('input');

    // const li = document.createElement('li');
    // const btn_working = document.createElement('button');
    // const btn_remove = document.createElement('button');

    
    // // btn_working.addEventListener('click', () => {
    // //     if(btn_working.textContent === '完了'){
    // //         btn_working.textContent = '作業中';
    // //     }else if(btn_working.textContent === '作業中'){
    // //        btn_working.textContent = "完了";
    // //    }
    // // })
    


    // // radioボタンの仕分け関数
    // function complete() {
    //     radio_complete.addEventListener('click', () => {
            
    //     })
    //     if(li.classList.contains('complete') === true) {

    //     }
    // }
    // function working() {
    //     if(li.classList.contains('working') === true) {

    //     }
    // }

    // function all() {
    //     if(li.classList.contains('all') === true) {

    //     }
    // }
    
   
    // add.addEventListener('click', () => {

    //     const li = document.createElement('li');
    //     const btn_working = document.createElement('button');
    //     const btn_remove = document.createElement('button');
    
    //     li.textContent = input_task.value;
    //     btn_working.textContent = "作業中";
    //     btn_remove.textContent = "削除"
    //     btn_working.classList.add("working");
    //     ul.appendChild(li);
    //     li.appendChild(btn_working);
    //     li.appendChild(btn_remove);
    //     console.log(btn_working);
    //     console.log(btn_remove);
        
    //     input_task.value = "";
    // })

    // const workings = document.getElementsByClassName('working');

    
    // btnChange();
    
    






}