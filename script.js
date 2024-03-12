document.addEventListener('DOMContentLoaded', function() {
    var addBtn = document.getElementById('add-btn');
    var taskInput = document.getElementById('task-input');
    var categoryDropdown = document.getElementById('category-dropdown');
    var taskList = document.getElementById('task-list');

    addBtn.addEventListener('click', function() {
        var taskText = taskInput.value;
        var category = categoryDropdown.value;

        if (taskText !== '' && category !== '') {
            var taskItem = createTaskItem(taskText, category);
            taskList.appendChild(taskItem);

            taskInput.value = '';
            categoryDropdown.value = '';
        }
    });

    function createTaskItem(taskText, category) {
        var taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        var taskInfo = document.createElement('div');
        taskInfo.textContent = taskText;
        taskInfo.className = 'task-info';

        var taskCategory = document.createElement('span');
        taskCategory.textContent = category;
        taskCategory.className = 'category';

        var actions = document.createElement('div');
        actions.className = 'actions';

        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function() {
            var newTaskText = prompt('Enter the updated task text:', taskText);
            if (newTaskText !== null) {
                taskInfo.textContent = newTaskText;
            }
        });

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        taskItem.appendChild(taskInfo);
        taskItem.appendChild(taskCategory);
        taskItem.appendChild(actions);

        return taskItem;
    }
});