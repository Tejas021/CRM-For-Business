import React, { useState } from 'react'
import "../../styles/Create.scss"
import { publicRequest } from '../../axios';
import { useSelector } from 'react-redux';

const CreateTask = ({setTasks,tasks}) => {
  const user = useSelector(state=>state.auth.currentUser)
  const [taskData, setTaskData] = useState({ title: "", description: "", budget: "",hours:'',assignedTo:'',assignedBy:user.email });


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('task',taskData)
    publicRequest.post("/task/create-task",taskData).then(res=>{
      setTasks([...tasks,res.data]);
      setTaskData({ title: "", description: "", budget: "",hours:'',assignedTo:'',assignedBy:user.email })
    }).catch(err=>console.log(err))
  }

  return (
    <div className='createContainer'>
      <h1>Create Task</h1>
      <input placeholder='Title' value={taskData.title} onChange={(e) => { setTaskData({ ...taskData, title: e.target.value }) }} />
      <input placeholder='Description' value={taskData.description} onChange={(e) => { setTaskData({ ...taskData, description: e.target.value }) }} />
      <input placeholder='Hours' value={taskData.hours} onChange={(e) => { setTaskData({ ...taskData,hours: e.target.value }) }} />
      <input placeholder='Assigned To' value={taskData.assignedTo} onChange={(e) => { setTaskData({ ...taskData, assignedTo: e.target.value }) }} />
      <input placeholder='Budget' value={taskData.budget} onChange={(e) => { setTaskData({ ...taskData, budget: e.target.value }) }} />
      <button onClick={e => handleSubmit(e)}>Create</button>

    </div>
  )
}

export default CreateTask
