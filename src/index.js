import './style.css';
import deleteTask from './components/crud/delete.js';
import saveToData from './components/crud/create.js';
import { form, lists } from './components/variables.js';
import { retrieveFromLocal } from './components/storage.js';
import renderAll from './components/render.';

const tasks = retrieveFromLocal() || [];

renderAll();
form.addEventListener('submit', saveToData);
lists.addEventListener('click', (event) => {
  deleteTask(event);
});
tasks.sort((a, b) => a.index - b.index);

export default tasks;
