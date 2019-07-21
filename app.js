// UI Variables
let tasks = [];
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clrBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// Event Listeners Loader
loadEventListeners();

// Load All Event Listeners
function loadEventListeners() {
    // Add Task Event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear tasks event
    clrBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

// Filter tasks
function filterTasks(e) {
    const textInput = e.target.value.toLowerCase();
    const li = document.querySelectorAll('.collection-item');
    console.log(li);
    li.forEach((task) => {
        
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(textInput) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }

    });
}

// Clear tasks
function clearTasks(e) {
    while(taskList.firstChild) {
        taskList.firstChild.remove();
    }
    e.preventDefault();
    
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        e.target.parentElement.parentElement.remove();
    }
} 

// Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert("Input cannot be empty");
    } else {
        // Create li
        const li = document.createElement("li");
        // Add Class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create Link
        const link = document.createElement('a');
        // Add Class
        link.className = 'delete-item secondary-content';
        // Add html
        link.innerHTML = "<i class='fa fa-remove'></i>";
        // Append link to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);
        // Clear text
        taskInput.value = '';
    }
    
    
    e.preventDefault();
}