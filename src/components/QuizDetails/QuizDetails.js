import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import "./QuizDetails.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizDetails = ({ quiz, idx }) => {
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
  const answer = () => {
    alert(correctAnswer);
  };

  return (
    <div>
      <div className="quizbox">
        <EyeIcon onClick={() => answer()} className="eyeicon"></EyeIcon>
        <h6>
          {" "}
          Quiz:{idx}. {question}
        </h6>

        <div className="  d-lg-flex flex-sm-column">
          {options.map((option, idx) => (
            <QuizOptions
              key={idx}
              clicked={clicked}
              option={option}
            ></QuizOptions>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
