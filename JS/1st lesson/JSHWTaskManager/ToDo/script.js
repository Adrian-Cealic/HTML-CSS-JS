const workerInput = document.querySelector(".worker-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const todoInput = document.querySelector(".work-input");

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
    event.preventDefault();
    
    const worker = workerInput.value.trim();
    const todoText = todoInput.value.trim();

    if (worker === "" || todoText === "") {
        alert("Eroare! Te rog introdu lucratorul si task-ul.");
        return;
    }

    const todoDiv = createTodoElement(worker, todoText);
    saveLocalTodos(todoText);
    todoList.appendChild(todoDiv);
    workerInput.value = "";
    todoInput.value = "";
}

function createTodoElement(worker, todoText) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = `${worker}: ${todoText}`;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = createButton("complete-btn", '<i class="fas fa-check-circle"></i>');
    const trashButton = createButton("trash-btn", '<i class="fas fa-trash"></i>');

    todoDiv.appendChild(completedButton);
    todoDiv.appendChild(trashButton);

    return todoDiv;
}

function createButton(className, innerHTML) {
    const button = document.createElement("button");
    button.innerHTML = innerHTML;
    button.classList.add(className);
    return button;
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        todo.classList.add("slide");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo() {
    const todos = todoList.childNodes;

    todos.forEach(function (todo) {
        switch (filterOption.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                todo.style.display = todo.classList.contains("completed") ? "flex" : "none";
                break;
            case "incomplete":
                todo.style.display = !todo.classList.contains("completed") ? "flex" : "none";
                break;
        }
    });
}

function saveLocalTodos(todo) {
    let todos = getLocalTodosArray();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodosArray() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

function getLocalTodos() {
    const todos = getLocalTodosArray();

    todos.forEach(function (todo) {
        const [worker, todoText] = todo.split(":");
        const todoDiv = createTodoElement(worker, todoText.trim());
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    const todoText = todo.querySelector(".todo-item").innerText;
    let todos = getLocalTodosArray();
    todos = todos.filter(t => t !== todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}
