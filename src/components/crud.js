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
  if (event.target.classList.contains("delete-btn")) {
    const index = event.target.dataset.index;
    tasks.splice(index, 1);
    // Re-render the task list
    tasks.forEach((todo, index) => {
      todo.index = index + 1;
    });
    storeToLocal(tasks)
    renderAll();

    
  }
};

export {deleteTask ,saveToData};
