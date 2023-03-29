import "./style.css";
import { saveToData, deleteTask } from "./components/crud";
import { form, inputTaker, deleteBtn } from "./components/variables";
import { lists } from "./components/variables";
import { retrieveFromLocal, storeToLocal } from "./components/storage";
import { EditTask } from "./components/crud";
let tasks;
if (retrieveFromLocal()) {
  tasks = retrieveFromLocal();
} else {
  tasks = [];
}
window.onload = function () {
  renderAll();
};
form.addEventListener("submit", saveToData);
lists.addEventListener("click", function (event) {
  deleteTask(event);
});
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
        <h2 class="input-board"> ${task.description}</h2>
       
        
      </h2>
   
      <div> 
              <i class="fa fa-pencil edit-icon" data-index="${index}"></i> 
               <i class="fas fa-trash-alt delete-btn" data-index="${index}"></i>       
              <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    `;

    div
      .querySelector(".edit-icon")
      .addEventListener("click", () => handleEdit(index));
    lists.append(div);
    lists.append(hr);
  });
};
const handleEdit=(index)=>{
  EditTask(index);
}



export { tasks, renderAll };
