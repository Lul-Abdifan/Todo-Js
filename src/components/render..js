import EditTask from './crud/update.js';
import { lists } from './variables.js';
import tasks from '../index.js';

const handleEdit = (index) => {
  EditTask(index);
};
const renderAll = () => {
  lists.innerHTML = '';
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    const hr = document.createElement('hr');
    div.classList.add('task');
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
      .querySelector('.edit-icon')
      .addEventListener('click', () => handleEdit(index));
    lists.append(div);
    lists.append(hr);
  });
};

export default renderAll;
