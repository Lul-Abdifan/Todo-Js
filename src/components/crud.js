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
export { saveToData};
