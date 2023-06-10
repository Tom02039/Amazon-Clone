import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productsNumber += parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );
      state.productsNumber -= productToRemove.quantity;
      const productToRemoveIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products.splice(productToRemoveIndex, 1);
    },
    incrementInCart: (state, action) => {
      const itemToIncrease = state.products.find(
        (product) => product.id === action.payload
      );
      if (itemToIncrease.quantity >= 1) {
        itemToIncrease.quantity += 1;
      }
      state.productsNumber += 1;
    },
    decrementInCart: (state, action) => {
      const itemToDecrease = state.products.find(
        (product) => product.id === action.payload
      );
      if (itemToDecrease.quantity === 1) {
        const itemToRemoveIndex = state.products.findIndex(
          (product) => product.id === action.payload
        );
        state.products.splice(itemToRemoveIndex, 1);
      } else {
        itemToDecrease.quantity -= 1;
      }
      state.productsNumber -= 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
