function addTask(){
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

let taskText = taskInput.value.trim();
if(taskText ==""){
  alert('please enter a task....')
}
const li =document.createElement('li');
li.innerText= taskText;
taskList.appendChild(li);

const btn =document.createElement('button');
btn.textContent = 'Delete';
li.appendChild(btn);
btn.classList.add('delete-btn');

btn.addEventListener('click',()=>{
  li.remove();
})

taskInput.value = '';

console.log(taskText)

}