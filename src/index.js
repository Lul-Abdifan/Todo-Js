import './style.css';

const tasks = [
  {
    description: 'Coding challenges',
    completed: false,
    index: 3,
  },
  {
    description: 'Movie-App',
    completed: false,
    index: 2,
  },
  {
    description: 'Microveres Task',
    completed: false,
    index: 1,
  },
];
const lists = document.querySelector('.lists');

tasks.sort((a, b) => a.index - b.index);

const renderAll = () => {
  tasks.forEach((task) => {
    const div = document.createElement('div');
    const hr = document.createElement('hr');
    div.classList.add('task');
    div.innerHTML = `
    <h2>
   <input type="checkbox"/>
   ${task.description}
   </h2>
   <div>  <div>
  //  <i class="fas fa-trash-alt"></i></div>
  //                           <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
   `;

    div.classList.add('task-list');
    lists.append(div);
    lists.append(hr);
  });
};

renderAll();
