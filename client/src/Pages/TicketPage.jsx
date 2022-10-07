import React from 'react'
import CreateTicket from '../components/Tickets/CreateTicket'
import TicketCard from '../components/Tickets/TicketCard'
import {useNavigate} from "react-router-dom";
import "../styles/Ticket.scss";


const TicketPage = () => {

  const navigate = useNavigate();
  return (
    <div
      className="ticketContainer"
      onClick={()=>navigate('/ticket/1')}
    >
      <div className='left'>



        <h2>UnAttended</h2>
        <div className='tickets'>    {[1, 2, 3, 4].map(t => <TicketCard />)}</div>

        <h2>Open</h2>
        <div className='tickets'>    {[1, 2, 3, 4].map(t => <TicketCard />)}</div>

        <h2>closed</h2>
        <div className='tickets'>    {[1, 2, 3, 4].map(t => <TicketCard />)}</div>
      </div>



      <div className='right'>
        <CreateTicket />
      </div>

    </div>
  )
}

export default TicketPage
