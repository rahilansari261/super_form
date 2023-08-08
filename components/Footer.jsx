"use client";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion, reArrangeQuestions } from "@/redux/reducers/slice";
import Mcq from "./Mcq/McqQuestion";
const Footer = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const addQuestionInFormBuilder = () => {
    const id = (questions.length + 1).toString();
    const defaultMcqQuestion = {
      id,
      questionType: "Mcq",
      questionComponent: <Mcq />,
    };
    dispatch(addQuestion(defaultMcqQuestion));
  };
  return (
    <div className="flex justify-between align-center gap-10 fixed bg-white bottom-0 left-0 right-0 p-4 shadow-[rgba(0,0,0,0.1)_0px_-10px_10px_-2px,rgba(0,0,0,0.1)_0px_-4px_5px_-2px]">
      <div className="cursor-pointer flex items-center justify-center w-5/12 border border-blue-900 text-blue-900 rounded-md hover:bg-gray-100 drop-shadow-md p-2">
        <span className=" text-blue-900" onClick={addQuestionInFormBuilder}>
          Add Question
        </span>
      </div>
      <div className="cursor-pointer flex items-center justify-center w-5/12 border border-blue-900 bg-blue-900 text-blue-900 rounded-md drop-shadow-md p-2">
        <span className=" text-white">Save</span>
      </div>
    </div>
  );
};

export default Footer;
