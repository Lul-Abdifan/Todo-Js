import { tasks } from "../..";
import { renderAll } from "../..";
import { storeToLocal } from "../storage";
import { inputTaker } from "../variables";
import { clearSpace } from "./supportive";
import { warning } from "../variables";


export default saveToData = (event) => {
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

  