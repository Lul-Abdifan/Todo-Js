/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */
import { tasks } from '../index.js';
import { inputTaker } from './variables.js';

const clearSpace = () => {
  inputTaker.value = '';
};
const updateIndex = () => {
  tasks.forEach((todo, index) => {
    todo.index = index + 1;
  });
};

export { clearSpace, updateIndex };
