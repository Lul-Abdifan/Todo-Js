import { inputTaker, lists, warning } from "./variables";
import { tasks } from "../index";
import { renderAll } from "../index";

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
  } else {
    warning.innerHTML = `<h1>Hey,It is Empty</h1>`;
  }
};
const clearSpace = () => {
    inputTaker.value = "";
};
export { saveToData };
