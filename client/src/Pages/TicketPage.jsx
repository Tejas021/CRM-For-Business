import React, { useEffect, useState } from 'react'
import CreateTicket from '../components/Tickets/CreateTicket'
import TicketCard from '../components/Tickets/TicketCard'
import "../styles/Ticket.scss"
import { publicRequest } from '../axios'
import { useSelector } from 'react-redux'

const TicketPage = () => {

  const [tickets, setTickets] = useState([])
  const user = useSelector(user => user.auth.currentUser)

  useEffect(() => {
    publicRequest.get("/ticket/getAllTickets").then(r => setTickets(r.data)).catch(err => console.log(err))
  }, [user])

  console.log(tickets);

  return (
    <div className="ticketContainer">
      <div className='left'>

        <h2>UnAttended</h2>
        <div className='tickets'>
          {
            tickets.filter(t=>t.status==='unAttended').length > 0 ?
            tickets.filter(t=>t.status==='unAttended').map(t => <TicketCard data={t} />):
            <p style={{textAlign:'center'}}>No tcikets</p>
          }
        </div>

        <h2>Open</h2>
        <div className='tickets'>
          {
            tickets.filter(t=>t.status==='open').length > 0 ?
            tickets.filter(t=>t.status==='open').map(t => <TicketCard data={t} />):
            <p style={{textAlign:'center'}}>No tcikets</p>
          }
        </div>

        <h2>closed</h2>
        <div className='tickets'>
          {
            tickets.filter(t=>t.status==='closed').length > 0 ?
            tickets.filter(t=>t.status==='closed').map(t => <TicketCard data={t} />):
            <p style={{textAlign:'center',color:'black'}}>No tcikets</p>
          }
        </div>
      </div>

      <div className='right'>
        <CreateTicket tickets={tickets} setTickets={setTickets} />
      </div>

    </div>
  )
}

export default TicketPage
