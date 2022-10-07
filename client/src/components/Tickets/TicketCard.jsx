import React from 'react'
import "../../styles/Card.scss"
const TicketCard = ({data}) => {

  function getColor(status){
    if(status==='unAttended'){
      return 'red'
    }else if(status==='open'){
      return 'orange'
    }else{
      return 'green'
    }
  }

  return (
    <div style={{
      backgroundColor: getColor(data.status)
    }} className='cardMain'>
      <h3 className='title'>{data.title}</h3>
      <p style={{
        marginTop:'5%'
      }}>ETA: {data.time} hours</p>
      <p>budget :- ${data.budget} </p>
    </div>
  )
}

export default TicketCard
