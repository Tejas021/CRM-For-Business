import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Cricle = ({value,color,text}) => {
  return (
    <div     style={{margin:"20px"}}>
    <CircularProgressbar value={value} maxValue={100} text={value}
    styles={buildStyles({

        pathTransitionDuration: 0.5,
 
        pathColor: color,
        textColor: '#121212',
       
      })} 
  
      />
      <h4>{text}</h4>
    </div>
  )
}

export default Cricle
