import React from "react";

const QuizOptions = ({ option, clicked }) => {
  return (
    <div>
      <button
        className="btn btn-outline-secondary m-2"
        onClick={() => clicked(option)}
      >
        {option}
      </button>
    </div>
  );
};

export default QuizOptions;
