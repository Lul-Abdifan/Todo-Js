/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */
import { tasks } from '../../index.js';
import { renderAll } from '../render.js';
import { storeToLocal } from '../storage.js';
import { updateIndex } from '../supportive.js';

const deleteTask = (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const { index } = event.target.dataset;
    tasks.splice(index, 1);
    // Re-render the task list
    updateIndex(tasks);
    storeToLocal(tasks);
    renderAll();
  }
};
export { deleteTask };
