import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  isLoading: true,
  error: null,
  products: [],
  product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    const regex = new RegExp("react-store-single-product", "i");
    if (regex.test(url)) {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
      try {
        const { data } = await axios(url);
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: error });
      }
    } else {
      dispatch({ type: GET_PRODUCTS_BEGIN });
      try {
        const { data } = await axios(url);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR, payload: error });
      }
    }
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchData }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
