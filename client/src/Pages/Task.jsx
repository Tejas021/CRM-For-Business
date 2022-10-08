import React, { useState, useEffect } from 'react'
import CreateTask from '../components/Tasks/CreateTask'
import TaskCard from '../components/Tasks/TaskCard'
import "../styles/Task.scss"
import { useSelector } from 'react-redux'
import { publicRequest } from '../axios'
import TicketPage from './TicketPage'

const Task = () => {

  const [tasks, setTasks] = useState([])

  const user = useSelector(user => user.auth.currentUser)

  useEffect(() => {
    publicRequest.get("/task/getAllTask").then(r => setTasks(r.data)).catch(err => console.log(err))
  }, [user])

  console.log(tasks)
  console.log("hello",user,user.isAdmin || user.role==="employee")

  return (
<>


{(user.isAdmin || user.role==="employee")?(<div className='taskContainer'>
      <div className='left'>



        <h2>UnAttended</h2>
        <div className='tasks'>
        {
            tasks.filter(t=>t.status==='unAttended').length > 0 ?
            tasks.filter(t=>t.status==='unAttended').map(t => <TaskCard data={t} />):
            <p style={{textAlign:'center'}}>No tcikets</p>
          }
        </div>

        <h2>Open</h2>
        <div className='tasks'>   {
            tasks.filter(t=>t.status==='open').length > 0 ?
            tasks.filter(t=>t.status==='open').map(t => <TaskCard data={t} />):
            <p style={{textAlign:'center'}}>No tcikets</p>
          }</div>

        <h2>closed</h2>
        <div className='tasks'>    
        {
            tasks.filter(t=>t.status==='close').length > 0 ?
            tasks.filter(t=>t.status==='close').map(t => <TaskCard data={t} />):
            <p style={{textAlign:'center'}}>No tcikets</p>
          }
        </div>
      </div>


      {user.isAdmin? <div className='right'>
        <CreateTask tasks={tasks} setTasks={setTasks} />
      </div>:<></>}
     
    </div>):<TicketPage/>}

</>
    
    
  )
}

export default Task
