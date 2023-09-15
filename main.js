// import { createRoot } from 'react-dom/client';

// // Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

// // Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world</h1>);


let addBtn = document.getElementById('add');
let taskText = document.getElementById('task-in');

function removeTask(){
    this.parentElement.remove();    // this keyword can be used to reference the calling object.
}

function checkOut(){
    this.classList.toggle("checked");
}

addBtn.addEventListener("click", ()=>{
    if(taskText.value.length != ""){
        let newTask = document.createElement('li');
        newTask.innerHTML = taskText.value;
        taskText.value = '';
        const ulItem = document.getElementById('task-ul');
        ulItem.appendChild(newTask);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        newTask.appendChild(span);
        span.classList.add("remove-task");

        // span.addEventListener("click", ()=>{
        //     span.parentElement.remove();
        // }, false);
        span.addEventListener("click", removeTask, false);

        // newTask.addEventListener("click", ()=>{
        //     newTask.classList.toggle("checked");
        // },false);
        newTask.addEventListener("click", checkOut,false);

        e.target.stopPropagation();
    }
    taskText.value = "";
})

let listItems = document.querySelectorAll('.remove-task');

for(let i=0; i<listItems.length; i++){
    const listItem = listItems[i];
    listItem.addEventListener("click", ()=>{
        const parent = listItem.parentElement;
        // document.removeElement(parent);
        parent.remove();
    })
}

