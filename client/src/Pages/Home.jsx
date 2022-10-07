import React, { useEffect, useState } from 'react'
import Dashboard from '../components/Home/Dashboard'
import Navbar from '../components/Navbar'
import Table from '../components/Home/Table1'
import { useSelector } from 'react-redux'
import TicketPage from './TicketPage'
import { publicRequest } from '../axios'
const Home = () => {
  const user = useSelector(state=>state.auth.currentUser)
  const [tasks, setTasks] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [users,setUsers] = useState([])


useEffect(()=>{


  publicRequest.get("/user/getAllUsers").then(res=>res.data).then(res=>setUsers(res))
  publicRequest.get("/ticket/getAllTickets").then(res=>res.data).then(res=>setTickets(res))
  publicRequest.get("/task/getAllTask").then(res=>res.data).then(res=>setTasks(res))

},[])


  return (
   <>
   <Navbar/>

   {user.isAdmin? <Dashboard/> : <TicketPage/>}
  {console.log('hello',users,tickets,tasks)}

   </>
  )
}

export default Home