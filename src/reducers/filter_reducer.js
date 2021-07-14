import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return state;
    case SET_LISTVIEW:
      return { ...state, isGridviewSet: false };
    case SET_GRIDVIEW:
      return { ...state, isGridviewSet: true };
    case UPDATE_SORT:
      return { ...state, sortOption: action.payload };
    case SORT_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    case UPDATE_FILTERS:
      if (action.payload.name === "shipping") {
        return {
          ...state,
          filters: { ...state.filters, shipping: !state.filters.shipping },
        };
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    case FILTER_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    case CLEAR_FILTERS:
      return { ...state, filters: action.payload };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
