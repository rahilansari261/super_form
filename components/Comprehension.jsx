import Mcq from "./Mcq/McqQuestion";
import { BsGrid } from "react-icons/bs";
const Comprehension = (props) => {
  return (
    <div className="  ">
      <textarea
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs resize-none mb-2"
        id="passage"
        name="passage"
        rows="5"
        placeholder="Type passage here"
      ></textarea>
      {props.quiz.map((item, index) => (
        <Mcq key={index} customStyle={props.mcqStyle} />
      ))}
    </div>
  );
};

export default Comprehension;
