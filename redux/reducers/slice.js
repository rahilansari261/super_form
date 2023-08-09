import Categorize from "@/components/Categorize";
import Cloze from "@/components/Cloze";
import Comprehension from "@/components/Comprehension";
import Mcq from "@/components/Mcq/McqQuestion";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    questionType: "mcq",
    questionComponent: <Mcq />,
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
      console.log(action)
      // const { id, questionType, questionComponent } = action.payload;
      // state.push({ id, questionType, questionComponent });
    },
    duplicateQuestion: (state, action) => {
      console.log(action)
      // const { id, questionType, questionComponent } = action.payload;
      // state.push({ id, questionType, questionComponent });
    },
    updateQuestion: (state, action) => {
      const { id, questionType, questionComponent } = action.payload;
      const questionIndex = state.findIndex((question) => question.id === id);
      if (questionIndex !== -1) {
        state[questionIndex].questionType = questionType;
        state[questionIndex].questionComponent = questionComponent;
      }
    },
    deleteQuestion: (state, action) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
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
