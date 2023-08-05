"use client";
import { BsGrid } from "react-icons/bs";
import Mcq from "./Mcq/McqQuestion";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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
const Categorize = (props) => {
  const [answers, setAnswers] = useState(answersArr);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(answers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAnswers(items);
  }
  return (
    <div className="  ">
      <input
        className="w-full bg-white p-1 rounded border border-gray-300 outline-none text-xs mb-2"
        id="ques"
        name="ques"
        placeholder="Description (Optional)"
      />
      <div className="text-xs">Categories</div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="answers">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {answers.map(({ id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        className="flex align-center mb-2 gap-2 align-center"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <div className="p-2" {...provided.dragHandleProps}>
                          <BsGrid className="self-center" />
                        </div>
                        <input
                          className="w-1/3 bg-white p-1 rounded border border-gray-300 outline-none text-xs"
                          id="ques"
                          name="ques"
                          placeholder={`Option ${id} (Optional)`}
                        />
                        <div className="text-lg ml-6 self-center cursor-pointer">
                          X
                        </div>
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
      <div className="flex justify-between">
        <div className="text-xs">Item</div>
        <div className="text-xs">Belongs To</div>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="answers">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {answers.map(({ id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        className="flex justify-between"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <div className="flex align-center mb-2">
                          <div className="p-2" {...provided.dragHandleProps}>
                            <BsGrid className="self-center" />
                          </div>
                          <input
                            className="w-1/2 bg-white px-1 rounded border border-gray-300 outline-none text-xs"
                            id="ques"
                            name="ques"
                            placeholder="Option 1"
                          />
                          <div className="text-lg ml-6 self-center cursor-pointer">
                            X
                          </div>
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
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Categorize;
