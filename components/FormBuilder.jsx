"use client";
import Image from "next/image";
import Question from "@/components/Question";
import Mcq from "@/components/Mcq/McqQuestion";
import Comprehension from "@/components/Comprehension";
import Cloze from "@/components/Cloze";
import Categorize from "@/components/Categorize";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const FormBuilder = () => {
  const questionArray = [{ quesNo: 1 }, { quesNo: 2 }];
  const mcqStyle = `rounded border border-gray-300`;
  return (
    <DragDropContext>
      <Droppable droppableId="answers">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {/* {answers.map(({ id }, index) => {
                return ( */}
            <Draggable key={1} draggableId={"category"} index={0}>
              {(provided) => (
                <Question
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  dragHandle={provided.dragHandleProps}
                >
                  <Categorize />
                </Question>
              )}
            </Draggable>

            <Draggable key={2} draggableId={"cloze"} index={1}>
              {(provided) => (
                <Question
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  dragHandle={provided.dragHandleProps}
                >
                  <Cloze />
                </Question>
              )}
            </Draggable>

            <Draggable key={3} draggableId={"comprehension"} index={2}>
              {(provided) => (
                <Question
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  dragHandle={provided.dragHandleProps}
                >
                  <Comprehension quiz={questionArray} mcqStyle={mcqStyle} />
                </Question>
              )}
            </Draggable>

            {/* );
              })} */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default FormBuilder;
