import { inputTaker, lists, warning } from "./variables";
import { renderAll } from "../index";
import { storeToLocal } from "./storage";
import { tasks } from "../index";
const saveToData = (event) => {
  event.preventDefault();
  const inputValue = inputTaker.value;
  if (inputValue) {
    const newTask = {
      description: inputValue,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(newTask);
    renderAll();
    clearSpace();
    storeToLocal(tasks);
  } else {
    warning.innerHTML = `<h1>Hey,It is Empty</h1>`;
  }
};
const clearSpace = () => {
    inputTaker.value = "";
};
const deleteTask=(event) => {
  // Check if the target of the event is a delete button
  if (event.target.classList.contains("delete-btn")) {
    // Get the index of the task to be deleted from the data-index attribute
    const index = event.target.dataset.index;
    // Remove the task from the tasks array
    tasks.splice(index, 1);
    tasks.forEach((todo, index) => {
      todo.index = index + 1;
    });
    storeToLocal(tasks)
    renderAll();

    
  }
};

export {deleteTask ,saveToData};
