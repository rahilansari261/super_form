import Mcq from "./Mcq";
const Categorize = (props) => {
  return (
    <div className=" px-4 py-2 ">
      <div className="text-xs mb-2">Question 1</div>
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

      <input
        className="w-full bg-white p-1 rounded border border-gray-300 outline-none text-xs mb-2"
        id="ques"
        name="ques"
        placeholder="Description (Optional)"
      />
      <div className="text-xs">Categories</div>
      <div className="flex align-center mb-2">
        <input
          className="w-1/3 bg-white px-1 rounded border border-gray-300 outline-none text-xs"
          id="ques"
          name="ques"
          placeholder="Option 1"
        />
        <div className="text-lg ml-6 self-center">X</div>
      </div>
      <div className="flex align-center mb-2">
        <input
          className="w-1/3 bg-white px-1 rounded border border-gray-300 outline-none text-xs"
          id="ques"
          name="ques"
          placeholder="Option 1"
        />
        <div className="text-lg ml-6 self-center">X</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs">Item</div>
        <div className="text-xs">Belongs To</div>
      </div>
      <div className="flex justify-between">
        <div className="flex align-center mb-2">
          <input
            className="w-1/2 bg-white px-1 rounded border border-gray-300 outline-none text-xs"
            id="ques"
            name="ques"
            placeholder="Option 1"
          />
          <div className="text-lg ml-6 self-center">X</div>
        </div>
        <select
          className="max-w-[160px] bg-white p-2 rounded border border-gray-300 outline-none text-xs mb-2"
          name="questions_types"
          id="questions-type-select"
        >
          <option value="mcq">Choose Category </option>
          <option value="comprehension">Comprehension</option>
          <option value="cloze">Cloze</option>
          <option value="categorize">Categorize</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex align-center mb-2">
          <input
            className="w-1/2 bg-white px-1 rounded border border-gray-300 outline-none text-xs"
            id="ques"
            name="ques"
            placeholder="Option 1"
          />
          <div className="text-lg ml-6 self-center">X</div>
        </div>
        <select
          className="max-w-[160px] bg-white p-2 rounded border border-gray-300 outline-none text-xs mb-2"
          name="questions_types"
          id="questions-type-select"
        >
          <option value="mcq">Choose Category </option>
          <option value="comprehension">Comprehension</option>
          <option value="cloze">Cloze</option>
          <option value="categorize">Categorize</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex align-center mb-2">
          <input
            className="w-1/2 bg-white px-1 rounded border border-gray-300 outline-none text-xs"
            id="ques"
            name="ques"
            placeholder="Option 1"
          />
          <div className="text-lg ml-6 self-center">X</div>
        </div>
        <select
          className="max-w-[160px] bg-white p-2 rounded border border-gray-300 outline-none text-xs mb-2"
          name="questions_types"
          id="questions-type-select"
        >
          <option value="mcq">Choose Category </option>
          <option value="comprehension">Comprehension</option>
          <option value="cloze">Cloze</option>
          <option value="categorize">Categorize</option>
        </select>
      </div>
    </div>
  );
};

export default Categorize;
