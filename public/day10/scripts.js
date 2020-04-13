(() => {
  let draggingElem;
  let taskElems;

  function addNewTask() {
    const taskInput = document.querySelector('#new-task');
    if (!taskInput.value) return;
    const newTaskElem = document.createElement('div');
    newTaskElem.classList.add('task');
    newTaskElem.setAttribute('draggable', true);
    newTaskElem.innerText = taskInput.value;
    const todolist = document.querySelector('#todo-container .drop-zone');
    todolist.appendChild(newTaskElem);
    taskInput.value = null;
    updateTasks();
  }

  function onClick() {
    const edittingElem = this;
    let editedText;
    while (!editedText) editedText = prompt(`Enter Edit`, this.innerText);
    edittingElem.innerText = editedText;
  }

  function onDragStart() {
    draggingElem = this;
  }

  function onDrop() {
    this.append(draggingElem);
    draggingElem = null;
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDragEnter(event) {
    event.preventDefault();
  }

  function onContext(event) {
    const removingElem = this;
    event.preventDefault();
    if (confirm(`Are you sure to delete ${removingElem.innerText}`)) {
      removingElem.remove()
    }
    removingElem = null
  }

  function updateTasks() {
    taskElems = document.querySelectorAll('.task');
    taskElems.forEach((taskElem) => {
      taskElem.addEventListener('dragstart', onDragStart);
      taskElem.addEventListener('click', onClick);
      taskElem.addEventListener('contextmenu', onContext);
    });
  }

  function onKeyprees(event) {
    if (event.key != 'Enter') return;
    addNewTask();
  }

  function run() {
    document.addEventListener('keypress', onKeyprees);
    const addTaskButton = document.querySelector('#add-new-task');
    const dropZoneElems = document.querySelectorAll('.drop-zone');
    addTaskButton.addEventListener('click', addNewTask);
    updateTasks();
    dropZoneElems.forEach((dropZoneElem) => {
      dropZoneElem.addEventListener('drop', onDrop);
      dropZoneElem.addEventListener('dragover', onDragOver);
      dropZoneElem.addEventListener('dragenter', onDragEnter);
    });
  }

  run();
})();
