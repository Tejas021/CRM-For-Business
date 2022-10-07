// import { bgcolor } from '@mui/system'
import React from 'react'

const TicketCount = ({bgColor,text,count}) => {
  return (
    <div className='cardMain' style={{backgroundColor: `${bgColor}`}}>
      <h2>{text} tickets</h2>
      <h4>count {count}</h4>
    </div>
  )
}

export default TicketCount
