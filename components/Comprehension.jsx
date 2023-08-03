import Mcq from "./Mcq";
import { BsGrid } from "react-icons/bs";
const Comprehension = (props) => {
  return (
    <div className=" px-4 py-2 ">
      <div className="flex gap-2">
        <BsGrid />
        <div className="text-xs mb-2">Question 1</div>
      </div>
      <select
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs mb-2"
        name="questions_types"
        id="questions-type-select"
      >
        <option value="mcq">MCQ</option>
        <option value="comprehension">Comprehension</option>
        <option value="cloze">Cloze</option>
        <option value="categorize">Categorize</option>
      </select>
      <br />
      <textarea
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs resize-none mb-2"
        id="passage"
        name="passage"
        rows="5"
        placeholder="Type passage here"
      ></textarea>
      {props.quiz.map((item) => (
        <Mcq customStyle={props.mcqStyle} />
      ))}
    </div>
  );
};

export default Comprehension;
