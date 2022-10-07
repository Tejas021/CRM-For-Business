import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { publicRequest } from '../../axios';
import "../../styles/Create.scss"
const CreateTicket = ({setTickets,tickets}) => {

    const user  = useSelector(state=>state.auth.currentUser);
    const [ticketData, setTicketData] = useState({title:"",description:"",budget:"",time:null,assignedBy:user.email});

    const handleSubmit=(e)=>{
        e.preventDefault()
        publicRequest.post("/ticket/createTicket",ticketData).then(res=>setTickets([...tickets,res.data])).catch(err=>console.log(err))
        setTicketData({title:"",description:"",budget:"",time:0,assignedBy:user.email})
    }

  return (
    <div className='createContainer'>

    <h1>Create a Ticket</h1>
      <input placeholder='Title' value={ticketData.title} onChange={(e)=>{setTicketData({...ticketData,title:e.target.value})}}/>
      <input placeholder='Description' value={ticketData.description} onChange={(e)=>{setTicketData({...ticketData,description:e.target.value})}}/>
      <input placeholder='Budget' value={ticketData.budget} onChange={(e)=>{setTicketData({...ticketData,budget:e.target.value})}}/>
      <input placeholder='Time' value={ticketData.time} onChange={(e)=>{setTicketData({...ticketData,time:e.target.value})}}/>
      
      <button onClick={e=>handleSubmit(e)}>Create</button>
  
    
    </div>
  )
}

export default CreateTicket
