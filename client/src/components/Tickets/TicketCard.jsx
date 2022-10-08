import React from 'react'
import "../../styles/Card.scss"
import { useNavigate } from "react-router-dom"
import { publicRequest } from '../../axios'

const TicketCard = ({ data }) => {

  const navigate = useNavigate()
  function getColor(status) {
    if (status === 'unAttended') {
      return 'red'
    } else if (status === 'open') {
      return 'orange'
    } else {
      return 'green'
    }
  }

  return (
    <div
      onClick={() => {  
        publicRequest.patch(`/ticket/updateTicket/${data._id}`,{status:'open'}).then(r=>{
          console.log(r.data);
          navigate(`/ticket/${r.data?._id}`,{state:r.data});
        })
        
      }}
      style={{
        backgroundColor: getColor(data?.status)
      }} className='cardMain'>
      <h3 className='title'>{data?.title}</h3>
      <p style={{
        marginTop: '5%'
      }}>ETA: {data?.time} hours</p>
      <p>budget :- ${data?.budget} </p>
    </div>
  )
}

export default TicketCard
