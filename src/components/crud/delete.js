import { tasks } from "../..";
import renderAll from "../render.";
import { storeToLocal } from "../storage";
import { updateIndex } from "./supportive";

const deleteTask = (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const index = event.target.dataset.index;
    tasks.splice(index, 1);
    // Re-render the task list
    updateIndex(tasks);
    storeToLocal(tasks);
    renderAll();
  }
};
export { deleteTask };
