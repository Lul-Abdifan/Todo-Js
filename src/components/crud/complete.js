import { tasks } from "../..";
import { storeToLocal } from "../storage";
import { renderAll } from "../render";
import { clearAll } from "../variables";

const complete = () => {
  clearAll.addEventListener("click", () => {
    const filteredTasks = tasks.filter((task) => task.completed === false);
    filteredTasks.forEach((task, index) => {
      task.index = index + 1;
    });

    storeToLocal(filteredTasks);
    renderAll();
    window.location.reload();
  });
};
export { complete };
