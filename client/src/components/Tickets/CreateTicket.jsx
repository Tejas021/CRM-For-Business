import React, { useState } from 'react'
import "../../styles/Create.scss"
const CreateTicket = () => {

    const [ticketData, setTicketData] = useState({title:"",description:"",budget:""});

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

  return (
    <div className='createContainer'>

    <h1>Create a Ticket</h1>
      <input placeholder='Title' value={ticketData.title} onChange={(e)=>{setTicketData({...ticketData,title:e.target.value})}}/>
      <input placeholder='Description' value={ticketData.description} onChange={(e)=>{setTicketData({...ticketData,description:e.target.value})}}/>
      <input placeholder='Budget' value={ticketData.budget} onChange={(e)=>{setTicketData({...ticketData,budget:e.target.value})}}/>
      <button onClick={e=>handleSubmit(e)}>Create</button>
  
    
    </div>
  )
}

export default CreateTicket
