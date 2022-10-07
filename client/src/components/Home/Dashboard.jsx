import React from "react";
import "../../styles/Dashboard.scss";
import TicketCard from "../Tickets/TicketCard";
import TicketCount from "./TicketCount";
const Dashboard = () => {
  return <div className="dashContainer">

    <div className="TicketSection">
      <TicketCount bgColor="red" text="Unattended" count={23} />
      <TicketCount bgColor="green" text="Closed" count={23} />
      <TicketCount bgColor="yellow" text="Open" count={23} />
    </div>

  </div>;
};

export default Dashboard;
