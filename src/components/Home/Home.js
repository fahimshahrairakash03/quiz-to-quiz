import React from "react";
import { useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";
import "./Home.css";

const Home = () => {
  const datas = useLoaderData();
  const quizes = datas.data;
  return (
    <div>
      <div className="home-intro d-lg-flex justify-content-between">
        <div className="home-details p-3 ">
          <h4 className="text-white pt-5 fw-light">Show real</h4>
          <h1 className="text-white mt-3 fw-bold fsize">POWER OF YOUR MIND</h1>
          <h5 className="text-white fw-light mt-5 pb-5">
            Do you like quizes, quests and fun competition? Our team is ready to
            organize the most fun event for you! We offer more than 20 different
            options for spending leisure time.
          </h5>
        </div>
        <div className="home-pic"></div>
      </div>

      {quizes.map((topic) => (
        <Topics key={topic.id} topic={topic}></Topics>
      ))}
    </div>
  );
};

export default Home;
