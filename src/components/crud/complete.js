/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */
import { tasks } from '../..';
import { storeToLocal } from '../storage';
import { renderAll } from '../render';
import { clearAll } from '../variables';

const complete = () => {
  clearAll.addEventListener('click', () => {
    const unCompletedTasks = tasks.filter((task) => task.completed === false);
    unCompletedTasks.forEach((task, index) => {
      task.index = index + 1;
    });

    storeToLocal(unCompletedTasks);
    renderAll();
    window.location.reload();
  });
};
export { complete };
