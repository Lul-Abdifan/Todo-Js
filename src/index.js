/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */
import './styles/main.scss';
import { deleteTask } from './components/crud/delete.js';
import { saveToData } from './components/crud/create.js';
import { form, lists, clearAll } from './components/variables.js';
import { retrieveFromLocal } from './components/storage.js';
import { renderAll } from './components/render';

import { complete } from './components/crud/complete.js';

const tasks = retrieveFromLocal() || [];

clearAll.addEventListener('click', complete);

renderAll();
form.addEventListener('submit', saveToData);
lists.addEventListener('click', (event) => {
  deleteTask(event);
});

export { tasks };
