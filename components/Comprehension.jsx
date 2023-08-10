import Mcq from "./Mcq/McqQuestion";
import { BsGrid } from "react-icons/bs";
import { QuestionSetting } from "./QuestionSetting";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Comprehension = (props) => {
  return (
    <div className="">
      <textarea
        className="w-full bg-white p-2 rounded border border-gray-300 outline-none text-xs resize-none mb-2"
        id="passage"
        name="passage"
        rows="5"
        placeholder="Type passage here"
      ></textarea>
      <DragDropContext>
        <Droppable droppableId="mcqInComprehension">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {props.quest.mcqs.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Mcq
                        key={index}
                        inComprehension={true}
                        provided={provided}
                        mcq={item}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <QuestionSetting question={props.quest} />
    </div>
  );
};

export default Comprehension;
