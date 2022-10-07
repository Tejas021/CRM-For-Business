import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Cricle from './Cricle';
const TicketSection = () => {
    
    const value = 0.66;
    const percentage=55;
  return (
    <div>
    <h1>Tickets</h1>
    <div style={{display:"flex"}}>

   <Cricle value={20} color="green" text="Closed"/>
   <Cricle value={30} color="yellow" text="Open"/>
   <Cricle value={40} color="red" text="Unattended"/>
    </div>
    </div>
    
  )
}

export default TicketSection
