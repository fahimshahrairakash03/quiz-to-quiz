import React from "react";
import { Link } from "react-router-dom";

const Topics = ({ topic }) => {
  console.log(topic);
  const { id, name, logo, total } = topic;
  return (
    <div class="card m-3" style={{ width: "18rem" }}>
      <img src={logo} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Quiz total: {total}</p>
        <Link to={`/home/${id}`} class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default Topics;
