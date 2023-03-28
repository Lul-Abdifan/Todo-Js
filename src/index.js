import "./style.css";
import { saveToData } from "./components/crud";
import { form } from "./components/variables";
import { lists } from "./components/variables";
import { retrieveFromLocal } from "./components/storage";
let tasks;
console.log(retrieveFromLocal());
if (retrieveFromLocal()) {
  tasks = retrieveFromLocal();
} else {
  tasks = [];
}
form.addEventListener("submit", saveToData);
window.onload = function () {
  renderAll();
};
tasks.sort((a, b) => a.index - b.index);
const renderAll = () => {
  lists.innerHTML = ``;
  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    const hr = document.createElement("hr");
    div.classList.add("task");
    div.innerHTML = `
    <h2>
   <input type="checkbox"/>
   ${task.description}
   </h2>
   <div> 
    <div>
   <i class="fas fa-trash-alt"></i></div>
       <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
   `;

    div.classList.add("task-list");
    lists.append(div);
    lists.append(hr);
  });
};
export { tasks, renderAll };
