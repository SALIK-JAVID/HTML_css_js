function addTodo() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();
    if (task === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${task} <button class='edit' onclick='editTodo(this)'>Edit</button> <button class='delete' onclick='deleteTodo(this)'>Delete</button>`;
    document.getElementById("todoList").appendChild(li);
    input.value = "";
}

function editTodo(button) {
    let newTask = prompt("Edit your task", button.parentElement.firstChild.textContent.trim());
    if (newTask) button.parentElement.firstChild.textContent = newTask;
}

function deleteTodo(button) {
    button.parentElement.remove();
}