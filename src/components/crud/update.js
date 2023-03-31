/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */
import { tasks } from '../../index.js';
import { renderAll } from '../render.js';
import { storeToLocal } from '../storage.js';

const EditTask = (index) => {
  const task = tasks[index];
  const descriptionElem = document.querySelector(
    `.task:nth-of-type(${index + 1}) .input-board`,
  );
  const inputElem = document.createElement('input');
  inputElem.type = 'text';
  inputElem.value = task.description;

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.classList.add('save');
  saveBtn.addEventListener('click', () => {
    tasks[index].description = inputElem.value;
    descriptionElem.textContent = inputElem.value;
    renderAll();
    storeToLocal(tasks);
  });

  const divElem = document.createElement('div');
  divElem.append(inputElem, saveBtn);
  descriptionElem.replaceWith(divElem);
};
export { EditTask };
