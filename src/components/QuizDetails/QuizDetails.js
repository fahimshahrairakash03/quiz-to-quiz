import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import "./QuizDetails.css";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizDetails = ({ quiz, idx }) => {
  //   console.log(quiz);
  const { id, options, question, correctAnswer } = quiz;
  const clicked = (option) => {
    console.log(option);
    if (option === correctAnswer) {
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }
  };
  const answer = () => {
    toast.success(correctAnswer);
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
      <ToastContainer />
    </div>
  );
};

export default QuizDetails;
