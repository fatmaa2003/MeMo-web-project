// function hide(divId) {
//     console.log('here');
//     document.getElementById(divId).classList.add("invisible");
//     confirm("undo");
//     if (confirm("undo") == true) {
//         document.getElementById(divId).classList.remove("invisible");
//       } else {
//         text = "You canceled!";
//         text = "You pressed undo!";
//       }
//     }

//     var acc = document.getElementsByClassName("accordion");
//     var i;

//     for (i = 0; i < acc.length; i++) {
//       acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//           panel.style.display = "none";
//         } else {
//           panel.style.display = "block";
//         }
//       }
// );

//     }

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //ADDING TO LOCAL STORAGE 
    saveTodos(todoInput.value);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

async function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("slide");

        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        let url = `http://localhost:3000/tasks/${todo.firstChild.id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                "authorization": localStorage.getItem('tokenKey'),
                "Content-Type": "application/json"
            },
        });
        if (response.status === 200) {
            todo.classList.toggle("completed");
            console.log("toggle completed: ", todo.firstChild.innerHTML)
        }

    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

async function saveTodos(todo) {
    let url = "http://localhost:3000/tasks"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem('tokenKey')
        },
        body: JSON.stringify({
            title: "",
            desc: todo,
            date: new Date().getTime(),
            completed: false
        })
    });
    console.log({ response })
    if (response.status === 200) {
        console.log(response.body)
    }
}

function getLocalTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></li>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
    });
}

async function getTodos() {
    let url = "http://localhost:3000/tasks"
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem('tokenKey')
        },
    });
    if (response.status === 200) {
        const resp = await response.json()
        tasks = resp.tasks;
        for (const task in tasks) {
            console.log({ task })
            tasks[task].forEach(function (todo) {
                const todoDiv = document.createElement("div");
                todoDiv.classList.add("todo");
                if(todo.completed){
                    todoDiv.classList.add("completed");
                }
                const newTodo = document.createElement("li");
                newTodo.innerText = todo.desc;
                newTodo.classList.add("todo-item");
                newTodo.setAttribute("id", todo._id)
                todoDiv.appendChild(newTodo);

                const completedButton = document.createElement("button");
                completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
                completedButton.classList.add("complete-btn");
                todoDiv.appendChild(completedButton);

                const trashButton = document.createElement("button");
                trashButton.innerHTML = '<i class="fas fa-trash"></li>';
                trashButton.classList.add("trash-btn");
                todoDiv.appendChild(trashButton);

                todoList.appendChild(todoDiv);
            });
        }

    }
}


async function removeLocalTodos(todo) {
    // let todos;
    // if (localStorage.getItem("todos") === null) {
    //     todos = [];
    // } else {
    //     todos = JSON.parse(localStorage.getItem("todos"));
    // }

    // const todoIndex = todo.children[0].innerText;
    // todos.splice(todos.indexOf(todoIndex), 1);
    // localStorage.setItem("todos", JSON.stringify(todos));

    let url = `http://localhost:3000/tasks/${todo.firstChild.id}`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem('tokenKey')
        },
    });
    if (response.status === 200) {
        const resp = await response.json()
    }
}

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});
searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
}




function todoSearch() {
    const searchValue = document.getElementById('todoSearchInput').value;

    let oldTodos = document.querySelectorAll(".todo");

    oldTodos.forEach(oldTodo=>{
        if(!oldTodo.innerText.includes(searchValue) && searchValue !== ""){
            oldTodo.classList.add("hide-element")
        }
        else{
            oldTodo.classList.remove("hide-element")
        }
    })
}





