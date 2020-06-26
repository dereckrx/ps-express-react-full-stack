import { connect } from "react-redux";
import React from "react";
import { TaskList } from "./TaskList";

const Dashboard = ({ groups }) => (
  <div className="row">
    {groups.map((group) => (
      <TaskList key={group.id} {...group} className="col" />
    ))}
  </div>
);

const mapStateToProps = ({ groups }) => ({ groups });

export const Dashboard = connect(mapStateToProps)(Dashboard);
