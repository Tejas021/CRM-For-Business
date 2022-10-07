import React from 'react'
import CreateTask from '../components/Tasks/CreateTask'
import TaskCard from '../components/Tasks/TaskCard'
import "../styles/Task.scss"

const Task = () => {
  return (
    <div className='taskContainer'>
    <div className='left'>



    <h2>UnAttended</h2>
    <div className='tickets'>    {[1,2,3,4].map(t=><TaskCard/>)}</div>

    <h2>Open</h2>
    <div className='tickets'>    {[1,2,3,4].map(t=><TaskCard/>)}</div>

    <h2>closed</h2>
    <div className='tickets'>    {[1,2,3,4].map(t=><TaskCard/>)}</div>
    </div>



    <div className='right'>
<CreateTask/>
    </div>
    </div>
  )
}

export default Task
