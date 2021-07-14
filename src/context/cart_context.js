import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("state");
  if (storage) return JSON.parse(storage);
  return [];
};

const initialState = {
  cartItems: getStateFromLocalStorage(),
  cartTotal: 0,
  amountTotal: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (cartItem) => {
    dispatch({ type: ADD_TO_CART, payload: cartItem });
  };

  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const toggleAmount = (method, id, color) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { method, id, color } });
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state.cartItems));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, clearCart, removeCartItem, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
