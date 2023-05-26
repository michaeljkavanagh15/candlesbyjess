import { createSlice, current } from "@reduxjs/toolkit";
import { useCheckCartItemQuantity } from "../../utils/cart/cart.utils";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const addCartItem = (cartItems, payload) => {
  const productToAdd = payload[0];
  const newItemStock = payload[1];
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  console.log(newItemStock);
  if (
    existingCartItem &&
    newItemStock > 0 &&
    newItemStock > existingCartItem.quantity
  ) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else if (existingCartItem && newItemStock === existingCartItem.quantity) {
    alert(
      `Woops! Looks like you've got all the available ${existingCartItem.name} in your cart!`
    );
    return [...cartItems];
  } else if (existingCartItem && newItemStock <= existingCartItem.quantity) {
    alert(
      `Sorry! There's only ${newItemStock} in stock! We'll Adjust your cart for you.`
    );
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: newItemStock }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
// TODO: adjust removeCart Item to make it recieve current stock value
const removeCartItem = (cartItems, payload) => {
  const cartItemToRemove = payload[0];
  const newItemStock = payload[1];
  console.log(cartItemToRemove);
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else if (existingCartItem.quantity > newItemStock) {
    alert(
      `Woops! Looks like you've more than the available ${existingCartItem.name} in your cart! We'll adjust it for you.`
    );
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: newItemStock }
        : cartItem
    );
  } else {
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

const setCartItemQuantity = (cartItems, cartItemToSet, currentStock) => {
  console.log("Quant Setter in Reducer:  " + currentStock);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToSet.id
  );
  return cartItems.map((cartItem) => {
    console.log(cartItem);
    return cartItem.id === existingCartItem.id
      ? { ...cartItem, quantity: currentStock }
      : cartItem;
  });
};

const checkCartItemQuantity = (cartItems) => {
  cartItems.map((cartItem) => {
    if (cartItem.stock < cartItem.quantity) {
      return false;
    }
  });

  return true;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },

    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },

    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },

    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },

    checkItemQuantityFromCart(state, action) {
      state.cartItems = checkCartItemQuantity(state.cartItems, action.payload);
    },

    setItemQuantityFromCart(state, action, currentStock) {
      state.cartItems = setCartItemQuantity(
        state.cartItems,
        action.payload,
        currentStock
      );
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  checkItemQuantityFromCart,
  setItemQuantityFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
