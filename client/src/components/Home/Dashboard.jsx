import React, { useEffect, useState} from "react";
import TicketPage from "../../Pages/TicketPage";
import "../../styles/Dashboard.scss";
import TicketCard from "../Tickets/TicketCard";
import Graph from "./Graph";
import Table1 from "./Table1";
import TicketCount from "./TicketCount";
import TicketSection from "./TicketSection";
import { publicRequest } from "../../axios";

const Dashboard = () => {


  
  const [tasks, setTasks] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [users,setUsers] = useState([])


useEffect(()=>{


  publicRequest.get("/user/getAllUsers").then(res=>res.data).then(res=>setUsers(res))
  publicRequest.get("/ticket/getAllTickets").then(res=>res.data).then(res=>setTickets(res))
  publicRequest.get("/task/getAllTask").then(res=>res.data).then(res=>setTasks(res))

},[])




  return <div className="dashContainer">
<div className="first" style={{display:"flex"}}>
<Graph/>
<div className="TicketSection">

     <TicketSection tickets={tickets}/>
    </div>
</div>

  

<h1 style={{marginTop:"50px"}}>Clients</h1>
   
    <Table1/>


    <h1>Tasks</h1>

    <div className="TicketSection">
      <TicketCount bgColor="#ff4444" text="Unattended" count={tasks.filter(t=>t.status==="unAttended").length} />
      <TicketCount bgColor="#00C851" text="Closed" count={tasks.filter(t=>t.status==="closed").length} />
      <TicketCount bgColor="#ffbb33" text="Open" count={tasks.filter(t=>t.status==="open").length} />
    </div>


    <h1>Employees</h1>

    <Table1/>

  </div>;
};

export default Dashboard;
