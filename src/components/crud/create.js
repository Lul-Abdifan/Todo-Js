/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */
import { tasks } from '../../index.js';
import { renderAll } from '../render.js';
import { storeToLocal } from '../storage.js';
import { inputTaker, warningSpace } from '../variables.js';
import { clearSpace } from '../supportive.js';

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
    warningSpace.innerHTML = '<h1>Hey,It is Empty</h1>';
  }
};
export { saveToData };
