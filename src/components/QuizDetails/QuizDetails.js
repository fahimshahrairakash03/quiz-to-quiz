import React from "react";
import "./QuizDetails.css";

const QuizDetails = ({ quiz }) => {
  console.log(quiz);
  const { id, options, question, correctAnswer } = quiz;

  return (
    <div>
      <h6> {question}</h6>

      {options.map((option) => (
        <p option={option}>
          <button className={option === correctAnswer ? `green` : `red`}>
            {option}
          </button>
        </p>
      ))}
    </div>
  );
};

export default QuizDetails;
