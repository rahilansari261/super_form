import Categorize from "@/components/Categorize";
import Cloze from "@/components/Cloze";
import Comprehension from "@/components/Comprehension";
import Mcq from "@/components/Mcq/McqQuestion";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "11",
    questionType: "Mcq",
    questionComponent: <Mcq />,
  },
  {
    id: "21",
    questionType: "Comprehension",
    questionComponent: <Comprehension mcqs={[{ id: "1" }]} />,
  },
  {
    id: "31",
    questionType: "Cloze",
    questionComponent: <Cloze />,
  },
  {
    id: "41",
    questionType: "Categorize",
    questionComponent: <Categorize />,
  },
];

const questionSlice = createSlice({
  name: "questions",
  initialState: initialState,
  reducers: {
    arrangeQuestions: (state, action) => {
      return action.payload;
    },
    addQuestions: (state, action) => {
      state.push(...action.payload);
    },
    addQuestion: (state, action) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    updateQuestion: (state, action) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
      }
    },
    deleteQuestion: (state, action) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
  },
});

export const {
  arrangeQuestions,
  addQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} = questionSlice.actions;
export default questionSlice.reducer;
