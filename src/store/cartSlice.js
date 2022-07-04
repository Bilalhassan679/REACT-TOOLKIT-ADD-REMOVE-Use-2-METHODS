import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // const ids = state.cartData.map((item) => item.id);
      // const isHave = ids.includes(action.payload.id);
      // console.log(isHave);
      // state.cartData = [...state.cartData, action.payload];
      // console.log("state", state.cartData);
      // cartData: [action.payload, ...state.cartData]

      const stateId = state.map((item) => item.id);
      const isHave = stateId.includes(action.payload.id);
      if (!isHave) {
        state.push(action.payload);
      } else {
        console.log("hello", 122222222222222);
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
      // return state.find(item=>( ==))
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
