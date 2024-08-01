document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const tasksContainer = document.getElementById('tasks-container');
    const searchInput = document.getElementById('search-input');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        if (taskText) {
            addTask(taskText, dueDate, priority);
            taskInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = 'low';
        }
    });

    function addTask(text, dueDate, priority) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        taskDiv.innerHTML = `
            <div class="task-details">
                <span>${text}</span>
                <span class="due-date">Due: ${new Date(dueDate).toLocaleDateString()}</span>
                <span class="priority">Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
            </div>
            <button class="delete-btn">Delete</button>
        `;

        taskDiv.querySelector('.delete-btn').addEventListener('click', () => {
            tasksContainer.removeChild(taskDiv);
        });

        tasksContainer.appendChild(taskDiv);
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const tasks = tasksContainer.querySelectorAll('.task');
        tasks.forEach(task => {
            const text = task.querySelector('.task-details span').textContent.toLowerCase();
            task.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });
    });
});
