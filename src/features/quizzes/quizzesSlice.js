import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {
      // e.g.
      ["456"]: {
        id: "456",
        topicId: "123",
        name: "quiz for example topic",
        cardIds: ["789", "101", "102"],
      },
    },
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = action.payload;
    },
  },
});

const selectQuizzesAll = (state) => state.quizzes.quizzes;

export { selectQuizzesAll };
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
