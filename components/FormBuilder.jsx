"use client";
import Image from "next/image";
import Question from "@/components/Question";
import Mcq from "@/components/Mcq/McqQuestion";
import Comprehension from "@/components/Comprehension";
import Cloze from "@/components/Cloze";
import Categorize from "@/components/Categorize";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BsGrid } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { reArrangeQuestions, updateQuestion } from "@/redux/reducers/slice";

const FormBuilder = () => {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(reArrangeQuestions(items));
  }
  const handleQuestionTypeChange = (e, id) => {
    const questionType = e.target.value;
    const updatedQuestion = {
      id,
      questionType,
    };
    questionType === "comprehension"
      ? (updatedQuestion.mcqs = [{ id: "1" }])
      : null;

    dispatch(updateQuestion(updatedQuestion));
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="answers">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {questions.map((question, index) => {
              return (
                <Draggable
                  key={`answer-${question.id}`}
                  draggableId={`answer-${question.id}`}
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
                        onChange={() =>
                          handleQuestionTypeChange(event, question.id)
                        }
                      >
                        <option value="mcq">MCQ</option>
                        <option value="comprehension">Comprehension</option>
                        <option value="cloze">Cloze</option>
                        <option value="categorize">Categorize</option>
                      </select>
                      <Question question={question} />
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
