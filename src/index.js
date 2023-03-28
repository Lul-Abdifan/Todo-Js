import "./style.css";
import { saveToData } from "./components/crud";
import { form } from "./components/variables";
import { lists } from "./components/variables";

const tasks = [
  {
    description: "Coding challenges",
    completed: false,
    index: 3,
  },

];

form.addEventListener("submit", saveToData);

tasks.sort((a, b) => a.index - b.index);

const renderAll = () => {
  const div = document.createElement("div");
  const hr = document.createElement("hr");
  div.innerHTML = "";

  tasks.forEach((task, index) => {
   
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

renderAll();

export { tasks, renderAll };
