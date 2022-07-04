import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  //NAYA THUNKS FUNCTION ?????????
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },

  //PURANA THUNKS FUNCTION ?????????

  // reducers: {
  //   setProduct: (state, action) => {
  //     //DO Not Do THis Never
  //     // const res = await fetch("https://fakestoreapi.com/products");
  //     state.data = action.payload;
  //   },
  //   setStatus: (state, action) => {
  //     state.status = action.payload;
  //   },
  // },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

//NAYA THUNKS FUNCTION ?????????
export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

//PURANA THUNKS FUNCTION ?????????

// // Thunks Fucntion
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       console.log("try");
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProduct(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (e) {
//       console.log("error");
//       console.log(e);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
