import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quizes = () => {
  const datas = useLoaderData();
  console.log(datas);
  const quizes = datas.data.questions;
  return (
    <div>
      <h1>Quiz of {datas.data.name}</h1>
      {quizes.map((quiz, idx) => (
        <QuizDetails idx={idx} key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
  );
};

export default Quizes;
