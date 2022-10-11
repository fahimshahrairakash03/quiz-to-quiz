import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import "./QuizDetails.css";

const QuizDetails = ({ quiz }) => {
  //   console.log(quiz);
  const { id, options, question, correctAnswer } = quiz;
  const clicked = (option) => {
    console.log(option);
    if (option === correctAnswer) {
      alert("this is right");
    } else {
      alert("this is not right");
    }
  };

  return (
    <div>
      <h6> {question}</h6>

      {options.map((option, idx) => (
        <QuizOptions key={idx} clicked={clicked} option={option}></QuizOptions>
      ))}
    </div>
  );
};

export default QuizDetails;
