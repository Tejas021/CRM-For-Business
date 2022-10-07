import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Cricle from './Cricle';
const TicketSection = ({tickets}) => {
    
    const value = 0.66;
    const percentage=55;
  return (
    <div>
    <h1>Tickets</h1>
    <div style={{display:"flex"}}>

   <Cricle value={tickets.filter(t=>t.status==="closed").length} maxValue={tickets.length} color="green" text="Closed"/>
   <Cricle value={tickets.filter(t=>t.status==="open").length} maxValue={tickets.length} color="yellow" text="Open"/>
   <Cricle value={tickets.filter(t=>t.status==="unAttended").length} maxValue={tickets.length} color="red" text="Unattended"/>
    </div>
    </div>
    
  )
}

export default TicketSection
