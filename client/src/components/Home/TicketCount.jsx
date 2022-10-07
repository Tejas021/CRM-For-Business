// import { bgcolor } from '@mui/system'
import React from 'react'

const TicketCount = ({bgColor,text,count}) => {
  return (
    <div className='cardMain' style={{backgroundColor: `${bgColor}`}}>
      <h3>{text} tasks</h3>
      <h4>count : <span style={{fontSize:"35px",color:"white"}}>{count}</span></h4>
    </div>
  )
}

export default TicketCount
