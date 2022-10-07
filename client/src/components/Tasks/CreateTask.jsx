import React, { useState } from 'react'
import "../../styles/Create.scss"
import { publicRequest } from '../../axios';

const CreateTask = ({setTasks,tasks}) => {
  const [taskData, setTaskData] = useState({ title: "", description: "", budget: "",time:'',assignedTo:'' });

  const handleSubmit = (e) => {
    e.preventDefault()
    publicRequest.post("/task/create-task",taskData).then(res=>{
      setTasks([...tasks,res.data]);
      setTaskData({ title: "", description: "", budget: "",time:'',assignedTo:'' })
    }).catch(err=>console.log(err))
  }

  return (
    <div className='createContainer'>
      <h1>Create Task</h1>
      <input placeholder='Title' value={taskData.title} onChange={(e) => { setTaskData({ ...taskData, title: e.target.value }) }} />
      <input placeholder='Description' value={taskData.description} onChange={(e) => { setTaskData({ ...taskData, description: e.target.value }) }} />
      <input placeholder='Hours' value={taskData.time} onChange={(e) => { setTaskData({ ...taskData,time: e.target.value }) }} />
      <input placeholder='Assigned To' value={taskData.assignedTo} onChange={(e) => { setTaskData({ ...taskData, assignedTo: e.target.value }) }} />
      <input placeholder='Budget' value={taskData.budget} onChange={(e) => { setTaskData({ ...taskData, budget: e.target.value }) }} />
      <button onClick={e => handleSubmit(e)}>Create</button>

    </div>
  )
}

export default CreateTask
