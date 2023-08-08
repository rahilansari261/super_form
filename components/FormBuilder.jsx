"use client";
import Image from "next/image";
import Question from "@/components/Question";
import Mcq from "@/components/Mcq/McqQuestion";
import Comprehension from "@/components/Comprehension";
import Cloze from "@/components/Cloze";
import Categorize from "@/components/Categorize";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BsGrid } from "react-icons/bs";
import { useState } from "react";

const FormBuilder = () => {
  const allQuestions = [
    {
      id: "1",
      questionType: "Mcq",
      questionComponent: <Mcq />,
    },
    {
      id: "2",
      questionType: "Comprehension",
      questionComponent: <Comprehension mcqs={[{ id: "1" }]} />,
    },
    {
      id: "3",
      questionType: "Cloze",
      questionComponent: <Cloze />,
    },
    {
      id: "4",
      questionType: "Categorize",
      questionComponent: <Categorize />,
    },
  ];

  const [questions, setQuestions] = useState(allQuestions);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setQuestions(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="form">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {questions.map(({ id, questionType, questionComponent }, index) => {
              return (
                <Draggable
                  key={id}
                  draggableId={`draggable-${id}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className={`rounded border border-gray-300 border-l-4 border-l-indigo-300 m-4 px-4 py-2 ${
                        index === questions.length - 1 ? "mb-24" : ""
                      } `}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div className="flex ">
                        <div className="p-2" {...provided.dragHandleProps}>
                          <BsGrid className="self-center" />
                        </div>
                        <div className="text-xs self-center">
                          Question {index + 1}
                        </div>
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
                      {questionComponent}
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
export default FormBuilder;
