import React from "react";
import TicketPage from "../../Pages/TicketPage";
import "../../styles/Dashboard.scss";
import TicketCard from "../Tickets/TicketCard";
import Graph from "./Graph";
import Table1 from "./Table1";
import TicketCount from "./TicketCount";
import TicketSection from "./TicketSection";
const Dashboard = () => {
  return <div className="dashContainer">
<div className="first" style={{display:"flex"}}>
<Graph/>
<div className="TicketSection">

     <TicketSection/>
    </div>
</div>

  

<h1 style={{marginTop:"50px"}}>Clients</h1>
   
    <Table1/>


    <h1>Tasks</h1>

    <div className="TicketSection">
      <TicketCount bgColor="#ff4444" text="Unattended" count={23} />
      <TicketCount bgColor="#00C851" text="Closed" count={23} />
      <TicketCount bgColor="#ffbb33" text="Open" count={23} />
    </div>


    <h1>Employees</h1>

    <Table1/>

  </div>;
};

export default Dashboard;
