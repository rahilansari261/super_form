import Mcq from "./Mcq/McqQuestion";
import { BsGrid } from "react-icons/bs";
import { QuestionSetting } from "./QuestionSetting";

const Comprehension = (props) => {
  return (
    <div className="">
      <textarea
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs resize-none mb-2"
        id="passage"
        name="passage"
        rows="5"
        placeholder="Type passage here"
      ></textarea>
      {props.quest.mcqs.map((item, index) => (
        <Mcq key={index} inComprehension={true} />
      ))}
      <QuestionSetting question={props.quest} />
    </div>
  );
};

export default Comprehension;
