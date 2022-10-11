import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quizes = () => {
  const datas = useLoaderData();
  const quizes = datas.data.questions;
  return (
    <div>
      {quizes.map((quiz) => (
        <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>
      ))}
    </div>
  );
};

export default Quizes;
