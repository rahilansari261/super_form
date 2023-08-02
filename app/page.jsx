import Image from "next/image";

export default function Home() {
  return (
    <div className="rounded border border-gray-300 border-l-4 border-l-indigo-300 m-4 px-4 py-2 ">
      <div className="text-xs mb-2">Question 1</div>
      <select
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs"
        name="questions_types"
        id="questions-type-select"
      >
        <option value="comprehension">Comprehension</option>
        <option value="cloze">Cloze</option>
        <option value="categorize">Categorize</option>
      </select>
      <br />
      <textarea
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs resize-none"
        id="passage"
        name="passage"
        rows="5"
        placeholder="Type passage here"
      ></textarea>

      <div className="text-xs">Question 1.1</div>
      <select
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs"
        name="questions_types"
        id="questions-type-select"
      >
        <option value="mcq">MCQ</option>
      </select>

      <input
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs"
        id="ques"
        name="ques"
        placeholder="Question Text"
      />
      {/* <div className="flex flex-col"> */}
      <div className="flex align-center">
        <input
          className="mr-4"
          type="radio"
          id="huey"
          name="drone"
          value="huey"
        />
        <input
          className="w-1/3 bg-white p-2 rounded border border-gray-300 outline-none text-xs"
          id="ques"
          name="ques"
          placeholder="Option 1"
        />
        <div className="text-lg ml-6 self-center">X</div>
      </div>
      <div className="flex align-center">
        <input
          className="mr-4"
          type="radio"
          id="huey"
          name="drone"
          value="huey"
          checked
        />
        <input
          className="w-1/3 bg-white p-2 rounded border border-gray-300 outline-none text-xs"
          id="ques"
          name="ques"
          placeholder="Option 2"
        />
        <div className="text-lg ml-6 self-center">X</div>
      </div>
      <div className="flex align-center">
        <input
          className="mr-4"
          type="radio"
          id="huey"
          name="drone"
          value="huey"
        />
        <input
          className="w-1/3 bg-white p-2 rounded border border-gray-300 outline-none text-xs"
          id="ques"
          name="ques"
          placeholder="Option 3 (Optional)"
        />
        <div className="text-lg ml-6 self-center">X</div>
      </div>
      {/* </div> */}
    </div>
  );
}
