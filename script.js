let tasks = [];

function addTask() {

    const input = document.getElementById("taskInput");

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    input.value = "";

    displayTasks();
}

function displayTasks() {

    const taskList = document.getElementById("taskList");

    const taskCount = document.getElementById("taskCount");

    const completedCount = document.getElementById("completedCount");

    taskList.innerHTML = "";

    let completedTasks = 0;

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        const span = document.createElement("span");

        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
            completedTasks++;
        }

        span.onclick = function() {
            task.completed = !task.completed;
            displayTasks();
        };

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            tasks.splice(index, 1);
            displayTasks();
        };

        li.appendChild(span);

        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

    taskCount.textContent = "Total Tasks: " + tasks.length;

    completedCount.textContent = "Completed: " + completedTasks;
}
