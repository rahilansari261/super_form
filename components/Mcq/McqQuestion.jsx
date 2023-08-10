"use client";

import { BsGrid } from "react-icons/bs";
import McqOptions from "./McqOptions";
import { QuestionSetting } from "../QuestionSetting";

const Mcq = (props) => {
  const borderAroundStyle = `px-4 py-2 rounded border border-gray-300`;

  return (
    <div className={` mb-2 ${props.inComprehension ? borderAroundStyle : ``}`}>
      {props.inComprehension && (
        <div>
          <div className="flex ">
            <div className="p-2">
              <BsGrid className="self-center" />
            </div>
            <div className="text-xs self-center">Question 1.1</div>
          </div>
          <select
            className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs mb-2"
            name="questions_types"
            id="questions-type-select"
          >
            <option value="mcq">MCQ</option>
          </select>
        </div>
      )}

      <input
        className="w-full bg-white p-1 rounded border border-gray-300 outline-none text-xs mb-2"
        id="ques"
        name="ques"
        placeholder="Question Text"
      />
      <McqOptions />
      <QuestionSetting question={props.quest} />
    </div>
  );
};

export default Mcq;
