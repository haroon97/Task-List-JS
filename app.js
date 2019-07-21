// UI Variables
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clrBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// Event Listeners Loader
loadEventListeners();

// Load All Event Listeners
function loadEventListeners() {
    // Add Tasks
    form.addEventListener('submit', addTask);
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