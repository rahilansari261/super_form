import Categorize from "@/components/Categorize";
import Cloze from "@/components/Cloze";
import Comprehension from "@/components/Comprehension";
import Mcq from "@/components/Mcq/McqQuestion";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    questionType: "mcq",
  },
];

const questionSlice = createSlice({
  name: "questions",
  initialState: initialState,
  reducers: {
    reArrangeQuestions: (state, action) => {
      return action.payload;
    },
    addQuestions: (state, action) => {
      state.push(...action.payload);
    },
    addQuestion: (state, action) => {
      const { id, questionType } = action.payload;
      state.push({ id, questionType });
    },
    duplicateQuestion: (state, action) => {
      const { id } = action.payload;
      const desiredIndex = state.findIndex((question) => question.id === id);

      const questionId = uuidv4();
      state.splice(desiredIndex, 0, { ...action.payload, id: questionId });
    },

    updateQuestion: (state, action) => {
      const { id, questionType } = action.payload;
      const desiredIndex = state.findIndex((question) => question.id === id);
      if (desiredIndex !== -1) {
        const updatedQuestion = { id, questionType };
        if (questionType === "comprehension") {
          updatedQuestion.mcqs = [{ id: uuidv4() }];
        }
        state[desiredIndex] = updatedQuestion;
      }
    },

    deleteQuestion: (state, action) => {
      const questionId = action.payload;
      return state.filter((question) => question.id !== questionId);
    },
  },
});

export const {
  reArrangeQuestions,
  addQuestions,
  addQuestion,
  duplicateQuestion,
  updateQuestion,
  deleteQuestion,
} = questionSlice.actions;
export default questionSlice.reducer;
