const storeToLocal = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const retrieveFromLocal = () => {
  const storedArray = JSON.parse(localStorage.getItem('tasks'));
  return storedArray;
};
export { storeToLocal, retrieveFromLocal };
