"use client";
import { MdAddCircle, MdContentCopy, MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuestion,
  deleteQuestion,
  duplicateQuestion,
  reArrangeQuestions,
} from "@/redux/reducers/slice";
import Mcq from "./Mcq/McqQuestion";
import { v4 as uuidv4 } from "uuid";
export const QuestionSetting = (props) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const addQuestionInFormBuilder = () => {
    const defaultMcqQuestion = {
      id: uuidv4,
      questionType: "mcq",
    };
    dispatch(addQuestion(defaultMcqQuestion));
  };
  // TODO -> pass whole question object to duplicateQuestion() func.
  const addDuplicateQuestionInFormBuilder = () => {
    dispatch(duplicateQuestion(props.question));
  };

  const deleteQuestionInFormBuilder = () => {
    if (questions.length === 1) return;
    dispatch(deleteQuestion(props.question.id));
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
      <MdDelete
        className="cursor-pointer text-xl"
        onClick={deleteQuestionInFormBuilder}
      />
    </div>
  );
};
