import React from "react";
import teacher from "../../img/teacher.svg";
import "./Users.css";
import { Button } from "@material-ui/core";

const Users = () => {
  return (
    <div className="users-block">
      <div className="user-explanation">
        <h1 className="titillium heading">Who should use Axiom?</h1>
        <p className="varela paragraph">
          Anyone can use Axiom but it specifically targets teachers and
          learners. Teachers meaning people providing information or knowledge
          about a subject matter. The platform is open for anyone to join and
          learn.
        </p>
        <Button variant="contained" size="medium" className="btn">
          Get Started
        </Button>
      </div>
      <div className="image-teacher">
        <img src={teacher} alt="teacher" className="teacher" />
      </div>
    </div>
  );
};

export default Users;
