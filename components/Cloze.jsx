import Mcq from "./Mcq/McqQuestion";
import { BsGrid } from "react-icons/bs";
import { QuestionSetting } from "./QuestionSetting";
const Cloze = (props) => {
  return (
    <div className=" ">
      <div className="relative text-xs">
        <div className="">Preview</div>
        <div className="text-red-900 absolute top-0 left-12">*</div>
      </div>
      <input
        className="w-full bg-white p-1 rounded border border-gray-300 outline-none text-xs mb-2"
        id="ques"
        name="ques"
        placeholder="Preview"
      />
      <div className="relative text-xs">
        <div className="">Sentence</div>
        <div className="text-red-900 absolute top-0 left-14">*</div>
      </div>
      <input
        className="w-full bg-white p-1 rounded border border-gray-300 outline-none text-xs mb-2"
        id="ques"
        name="ques"
        placeholder="Underline the words here to convert them into blanks"
      />
      <div className="flex align-center mb-2">
        <input
          className="mr-4"
          type="checkbox"
          id="huey"
          name="drone"
          value="huey"
        />
        <input
          className="w-1/3 bg-white p-1 rounded border border-gray-300 outline-none text-xs"
          id="ques"
          name="ques"
          placeholder="Option 1"
        />
        <div className="text-lg ml-6 self-center cursor-pointer">X</div>
      </div>
      <div className="flex align-center mb-2">
        <input
          className="mr-4"
          type="checkbox"
          id="huey"
          name="drone"
          value="huey"
        />
        <input
          className="w-1/3 bg-white p-1 rounded border border-gray-300 outline-none text-xs"
          id="ques"
          name="ques"
          placeholder="Option 2"
        />

        <div className="text-lg ml-6 self-center cursor-pointer">X</div>
      </div>
      <QuestionSetting question={props.quest} />
    </div>
  );
};

export default Cloze;
