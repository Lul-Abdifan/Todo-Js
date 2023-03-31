import './styles/main.scss';
import { deleteTask } from './components/crud/delete.js';
import { saveToData } from './components/crud/create.js';
import { form, lists, clearAll } from './components/variables.js';
import { retrieveFromLocal } from './components/storage.js';
import { renderAll } from './components/render.js';
import { complete } from './components/crud/complete.js';

const tasks = retrieveFromLocal() || [];

clearAll.addEventListener('click', complete);

renderAll();
form.addEventListener('submit', saveToData);
lists.addEventListener('click', (event) => {
  deleteTask(event);
});
tasks.sort((a, b) => a.index - b.index);

export { tasks };
