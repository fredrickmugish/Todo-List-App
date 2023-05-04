
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React from 'react';
function App() {
 
  const [toDo, setToDo] = useState([]);

  //Temp state
const[newTask, setNewTask] = useState("");
const [updateData, setUpdateData] = useState("");


//add task
const addTask = () =>{
  if(newTask){
    let num = toDo.length + 1;
    let newEntry = {id: num, title: newTask, status: false}
    setToDo([...toDo, newEntry])
    setNewTask("");
  }
}

//delete task
const deleteTask = (id) =>{
  let newTasks = toDo.filter(task =>task.id !==id)
  setToDo(newTasks);
}

//mark task as done/ complete
const markDone = (id) =>{
  let newTask = toDo.map(task =>{
if(task.id === id){
  return ({...task, status: !task.status})
}
return task;
  })
  setToDo(newTask);
}

//change task
const changeTask = (e) =>{
let newEntry={
  id: updateData.id,
  title:e.target.value,
  status:updateData.status? true:false
}
setUpdateData(newEntry);
}

//update task
const updateTask = () =>{
  let filterRecords =  [...toDo].filter
  (task=>task.id !== updateData.id);
  let updatedObject = [...filterRecords, updateData]
  setToDo(updatedObject);
  setUpdateData("");
}

//cancel update
const cancelUpdate = () =>{

}

  return (
    <div className="container App">
  <br/><br/>
  <h2>Todo List App</h2>
  <br/><br/>





{/*add task && update task*/}

{updateData && updateData ? (

 <UpdateForm
  updateData={updateData}
  changeTask={changeTask}
  updateTask={updateTask}
  cancelUpdate={cancelUpdate}
 />
) : (

<AddTaskForm
  newTask={newTask}
  setNewTask={setNewTask}
  addTask={addTask}
/>
)}





{toDo && toDo.length? '': 'No Tasks...'}

{/*display todos*/}
<ToDo
  toDo={toDo}
  markDone={markDone}
  setUpdateData={setUpdateData}
  deleteTask={deleteTask}
/>
    </div>
  );
}

export default App;
