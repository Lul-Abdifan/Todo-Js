import "./style.css";
import { saveToData, deleteTask } from "./components/crud";
import { form, inputTaker, deleteBtn } from "./components/variables";
import { lists } from "./components/variables";
import { retrieveFromLocal, storeToLocal } from "./components/storage";
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

const handleEdit = (index) => {
  const task = tasks[index];
  const descriptionElem = document.querySelector(
    `.task:nth-of-type(${index + 1}) .input-board`
  );
  console.log(descriptionElem);

  const inputElem = document.createElement("input");
  inputElem.type = "text";
  inputElem.value = task.description;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.classList.add('save');
  saveBtn.addEventListener("click", () => {
    tasks[index].description = inputElem.value;
    descriptionElem.textContent = inputElem.value;
    renderAll();
    storeToLocal(tasks);
  });

  const divElem = document.createElement("div");
  divElem.append(inputElem, saveBtn);
  descriptionElem.replaceWith(divElem);
};

export { tasks, renderAll };
