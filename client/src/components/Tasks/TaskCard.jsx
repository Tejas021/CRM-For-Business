import React from 'react'
import "../../styles/Card.scss"
import { useNavigate } from "react-router-dom"

const TaskCard = ({ data }) => {

  const navigate = useNavigate()
  console.log(data);
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
      style={{
        backgroundColor: getColor(data.status)
      }}
      onClick={() => {console.log('first'); navigate(`/task/${data._id}`,{state:data})}}
      className='cardMain'
    >
      <h3 className='title'>{data.title}</h3>
      <p style={{
        marginTop: '5%'
      }}>ETA: {data.hours} hours</p>
      <p>budget :- ${data.budget} </p>
      <p>Assigned To :- {data.assignedTo} </p>

    </div>
  )
}

export default TaskCard
