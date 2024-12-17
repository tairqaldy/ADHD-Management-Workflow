const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        saveTasks();
        renderTasks();
        input.value = '';
    }
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">${task.text}</span>
            <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}

renderTasks();
