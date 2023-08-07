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
  const questionArray = [
    { id: "1", ques: <Categorize /> },
    { id: "2", ques: <Cloze /> },
  ];

  const [questions, setQuestions] = useState(questionArray);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setQuestions(items);
  }

  const mcqStyle = `rounded border border-gray-300`;
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="form">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {questions.map(({ id, ques }, index) => {
              return (
                <Draggable
                  key={id}
                  draggableId={`draggable-${id}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="rounded border border-gray-300 border-l-4 border-l-indigo-300 m-4 px-4 py-2 "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex ">
                        <div className="p-2">
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
                        <option value="comprehension">Comprehension</option>
                        <option value="cloze">Cloze</option>
                        <option value="categorize">Categorize</option>
                      </select>
                      {ques}
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
