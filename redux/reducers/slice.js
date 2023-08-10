import Categorize from "@/components/Categorize";
import Cloze from "@/components/Cloze";
import Comprehension from "@/components/Comprehension";
import Mcq from "@/components/Mcq/McqQuestion";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
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
      const desiredIndex = id;
      const questionId = id + 1;
      state.splice(desiredIndex, 0, { ...action.payload, id: questionId });
    },

    updateQuestion: (state, action) => {
      const { id, questionType, mcqs } = action.payload;
      const questionIndex = state.findIndex((question) => question.id === id);
      if (questionIndex !== -1) {
        const updatedQuestion = { ...state[questionIndex], questionType };
        if (questionType === "comprehension" && mcqs !== undefined) {
          updatedQuestion.mcqs = mcqs;
        }
        state[questionIndex] = updatedQuestion;
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
