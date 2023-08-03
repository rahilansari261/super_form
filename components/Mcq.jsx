"use client";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const answersArr = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
];

const Mcq = (props) => {
  const [answers, setAnswers] = useState(answersArr);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(answers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAnswers(items);
  }
  return (
    <div className={` px-4 py-2 mb-2 ${props.customStyle}`}>
      <div className="text-xs mb-2">Question 1</div>
      <select
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs mb-2"
        name="questions_types"
        id="questions-type-select"
      >
        <option value="mcq">MCQ</option>
      </select>

      <input
        className="w-full bg-white p-1 rounded border border-gray-300 outline-none text-xs mb-2"
        id="ques"
        name="ques"
        placeholder="Question Text"
      />
      {/* <div className="flex flex-col"> */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="mcqs">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {answersArr.map(({ id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        className="flex align-center mb-2"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <input
                          className="mr-4"
                          type="radio"
                          id="huey"
                          name="drone"
                          value="huey"
                        />
                        <input
                          className="w-1/3 bg-white p-1 rounded border border-gray-300 outline-none text-xs"
                          id="ques"
                          name="ques"
                          placeholder={`Option ${id} (Optional)`}
                        />
                        <div className="text-lg ml-6 self-center">X</div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* </div> */}
    </div>
  );
};

export default Mcq;
