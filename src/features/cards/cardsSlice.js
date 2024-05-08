import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {
      // e.g.
      ["789"]: {
        id: "789",
        front: "front text",
        back: "back text",
      },
      ["101"]: {
        id: "101",
        front: "front text",
        back: "back text",
      },
      ["102"]: {
        id: "102",
        front: "front text",
        back: "back text",
      },
    },
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = action.payload;
    },
  },
});

const selectCardById = (state, cardId) => state.cards.cards[cardId];

export { selectCardById };
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
