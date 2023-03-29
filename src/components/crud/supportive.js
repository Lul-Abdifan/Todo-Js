import { tasks } from "../..";
import { inputTaker } from "../variables";
const clearSpace = () => {
    inputTaker.value = "";
  };
  const updateIndex=()=>{
  tasks.forEach((todo, index) => {
      todo.index = index + 1;
    });   
  }
 
  export {clearSpace,updateIndex}