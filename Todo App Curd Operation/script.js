let form = document.getElementById("task-form")
let tasksSection = document.getElementById("task-lists")
let allTasks = [];

//generate todo
let generateTodo = (todos)=>{
tasksSection.innerHTML = ""
todos.forEach((task, index)=>{
tasksSection.innerHTML += `
<div class ="added" >
<h5 class="heading">${task}</h5>
<div>
  <button class ="btnedt" onclick = editTodo(${index}) >Edit</button>
  <button class ="btndel" onclick = deleteTodo(${index}) >Delete</button>
</div>
</div>
`
})
}

//add todo
let addTodo = (task)=>{
if(!task){
    alert("Required Field are missing !")
    return
}
allTasks.push(task);
// console.log(allTasks);
  let setalltask = localStorage.setItem("alltask",JSON.stringify(allTasks));



// console.log(setalltask);

}

//edit Todo
let editTodo = (index)=>{
    let updatedVal = prompt("Enter Updated Value:-",allTasks[index])
    allTasks[index] =  updatedVal;
    generateTodo(allTasks)
    let editalltask = localStorage.setItem("alltask",JSON.stringify(allTasks))
// console.log(editalltask); 
}

//delete todo
let deleteTodo = (index)=>{
    allTasks.splice(index, 1);
    generateTodo(allTasks)
    let deletealltask = localStorage.removeItem("alltask",JSON.stringify(allTasks))
// console.log(deletealltask);
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let task = e.target.task.value;
    if(!task){
                alert("Required Fields are missing !");
                return
            }
            console.log("Form is Submitted",task);
    addTodo(task)
    generateTodo(allTasks)
form.reset();
})



