import { BsGrid } from "react-icons/bs";

const Question = ({ dragHandle, children }) => {
  return (
    <div className="rounded border border-gray-300 border-l-4 border-l-indigo-300 m-4 px-4 py-2 ">
      <div className="flex ">
        <div className="p-2" {...dragHandle}>
          <BsGrid className="self-center" />
        </div>
        <div className="text-xs self-center">Question 1</div>
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
      {children}
    </div>
  );
};

export default Question;
