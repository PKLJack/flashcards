import { createSlice } from "@reduxjs/toolkit";

import { addQuiz } from "../quizzes/quizzesSlice";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
      // e.g.
      ["123"]: {
        id: "123",
        name: "example topic",
        icon: "icon url",
        quizIds: ["456"],
      },
    },
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = action.payload;
      state.topics[id].quizIds = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      // payload: { id: '999', name: 'quiz name', topicId: '123', cardIds: ['1', '2', '3', ...]}
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    });
  },
});

const selectTopicsAll = (state) => state.topics.topics;

export { selectTopicsAll };
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
