import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const limit = (currAmount, stock, amount, method) => {
  if (method === "inc") {
    if (stock - currAmount <= amount) return stock;
    return currAmount + amount;
  } else if ("dec") {
    if (amount >= currAmount) return 1;
    return currAmount - amount;
  }
};

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let index = -1;
      for (let i = 0; i < state.cartItems.length; i++) {
        if (
          state.cartItems[i].id === action.payload.id &&
          state.cartItems[i].color === action.payload.color
        ) {
          index = i;
          break;
        }
      }
      if (index < 0) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        const newArray = [...state.cartItems];
        const currAmount = newArray[index].amount;
        const stockLimit = newArray[index].product.stock;
        const newAmount = limit(
          currAmount,
          stockLimit,
          action.payload.amount,
          "inc"
        );
        newArray[index].amount = newAmount;
        return {
          ...state,
          cartItems: newArray,
        };
      }
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    case COUNT_CART_TOTALS:
      const total = state.cartItems.reduce(
        (acc, curr) => {
          acc.cart = acc.cart + curr.amount * curr.product.price;
          acc.amount += curr.amount;
          return acc;
        },
        { cart: 0, amount: 0 }
      );
      return { ...state, cartTotal: total.cart, amountTotal: total.amount };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems
          .slice(0, action.payload)
          .concat(state.cartItems.slice(action.payload + 1)),
      };
    case TOGGLE_CART_ITEM_AMOUNT:
      const newArray = state.cartItems.map((item) => {
        if (
          item.id === action.payload.id &&
          item.color === action.payload.color
        ) {
          if (action.payload.method === "dec") {
            if (item.amount === 1) {
              return { ...item, amount: 1 };
            } else {
              return { ...item, amount: item.amount - 1 };
            }
          } else if (action.payload.method === "inc") {
            if (item.amount === item.product.stock) {
              return { ...item, amount: item.product.stock };
            } else {
              return { ...item, amount: item.amount + 1 };
            }
          }
        }
        return item;
      });
      return { ...state, cartItems: newArray };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
