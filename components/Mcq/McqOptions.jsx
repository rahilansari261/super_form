"use client";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsGrid } from "react-icons/bs";
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

const McqOptions = (props) => {
  const [answers, setAnswers] = useState(answersArr);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(answers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAnswers(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="options">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {answers.map(({ id }, index) => {
              return (
                <Draggable
                  key={`option-${id}`}
                  draggableId={`option-${id}`}
                  index={index}
                >
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
  );
};

export default McqOptions;
