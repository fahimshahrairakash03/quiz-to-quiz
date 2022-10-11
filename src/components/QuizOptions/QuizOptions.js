import React from "react";

const QuizOptions = ({ option, clicked }) => {
  return (
    <div>
      <button onClick={() => clicked(option)}>{option}</button>
    </div>
  );
};

export default QuizOptions;
