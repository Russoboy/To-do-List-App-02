// Select elements
const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTask(taskText);
        taskInput.value = '';
    }
});

// Create task
 const createTask = (text) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
    addTaskEventListeners(li);
}

// Add event listeners for Edit and Delete buttons
const addTaskEventListeners = (taskItem) => {
    const editBtn = taskItem.querySelector('.edit-btn');
    const deleteBtn = taskItem.querySelector('.delete-btn');
    const taskText = taskItem.querySelector('span');

    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit task:', taskText.textContent);
        if (newText !== null) {
            taskText.textContent = newText;
        }
    });

    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });

    taskText.addEventListener('click', () => {
        taskText.classList.toggle('completed');
    });
}
