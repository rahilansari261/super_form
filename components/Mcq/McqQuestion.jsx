"use client";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsGrid } from "react-icons/bs";
import McqOptions from "./McqOptions";

const mcqArr = [
  {
    id: "1",
  },
];

const Mcq = (props) => {
  const [mcqs, setMcq] = useState(mcqArr);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(mcqs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setMcq(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="mcq">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {mcqs.map(({ id }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      className={` px-4 py-2 mb-2 ${props.customStyle}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div className="flex ">
                        <div className="p-2" {...provided.dragHandleProps}>
                          <BsGrid className="self-center" />
                        </div>
                        <div className="text-xs self-center">Question {id}</div>
                      </div>
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
                      <McqOptions />
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
  );
};

export default Mcq;
