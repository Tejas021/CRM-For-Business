import React,{useState} from 'react'
import "../../styles/Create.scss"
const CreateTask = () => {
    const [taskData, setTaskData] = useState({title:"",description:"",budget:""});

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

  return (
    <div className='createContainer'>
    <h1>Create Task</h1>
    <input placeholder='Title' value={taskData.title} onChange={(e)=>{setTaskData({...taskData,title:e.target.value})}}/>
    <input placeholder='Description' value={taskData.description} onChange={(e)=>{setTaskData({...taskData,description:e.target.value})}}/>
      <button onClick={e=>handleSubmit(e)}>Create</button>

    </div>
  )
}

export default CreateTask
