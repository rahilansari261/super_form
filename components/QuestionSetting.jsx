"use client";
import { MdAddCircle, MdContentCopy, MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion, reArrangeQuestions } from "@/redux/reducers/slice";
import Mcq from "./Mcq/McqQuestion";
import  ComponentArray  from "@/util/constant";
export const QuestionSetting = (props) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const addQuestionInFormBuilder = () => {
    const id = (questions.length + 1).toString();
    const defaultMcqQuestion = {
      id,
      questionType: "mcq",
      questionComponent: <Mcq />,
    };
    dispatch(addQuestion(defaultMcqQuestion));
  };
  const addDuplicateQuestionInFormBuilder = () => {
    const id = (questions.length + 1).toString();

    console.log(ComponentArray[props.questionType]);
    const addDuplicateQuestion = {
      id,
      questionType: props.questionType,
      questionComponent: ComponentArray[props.questionType],
    };
    dispatch(addQuestion(addDuplicateQuestion));
  };
  return (
    <div className="flex px-4 py-2 justify-between align-center">
      <MdAddCircle
        className="cursor-pointer text-xl"
        onClick={addQuestionInFormBuilder}
      />
      <MdContentCopy
        className="cursor-pointer text-xl"
        onClick={addDuplicateQuestionInFormBuilder}
      />
      <MdDelete className="cursor-pointer text-xl" />
    </div>
  );
};
