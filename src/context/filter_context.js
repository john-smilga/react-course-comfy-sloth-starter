import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  isGridviewSet: true,
  filters: {
    query: "",
    category: "all",
    company: "all",
    color: "all",
    price: "0",
    shipping: false,
  },
  filteredProducts: [],
  sortOption: "price-asc",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const maxPrice = products.reduce((acc, curr) => {
    if (curr.price > acc) return curr.price;
    return acc;
  }, 0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridview = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListview = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };

  const sortProducts = (products) => {
    switch (state.sortOption) {
      case "price-asc":
        return products.slice().sort((a, b) => a.price - b.price);
      case "price-desc":
        return products.slice().sort((a, b) => b.price - a.price);
      case "name-asc":
        return products.slice().sort((a, b) => {
          let i = 0;
          let order;
          while (!order && i < a.name.length && i < b.name.length) {
            order =
              a.name[i] > b.name[i]
                ? 1
                : a.name[i] < b.name[i]
                ? -1
                : undefined;
            i++;
          }
          return order || -1;
        });
      case "name-desc":
        return products.slice().sort((a, b) => {
          let i = 0;
          let order;
          while (!order && i < a.name.length && i < b.name.length) {
            order =
              a.name[i] > b.name[i]
                ? -1
                : a.name[i] < b.name[i]
                ? 1
                : undefined;
            i++;
          }
          return order || 1;
        });
      default:
        return products;
    }
  };

  const filterProducts = () => {
    const regex = new RegExp(`${state.filters.query}`, "i");
    const newProductList = products
      .filter((prod) => {
        if (state.filters.query.length === 0) return prod;
        return regex.test(prod.name);
      })
      .filter((prod) => {
        if (state.filters.category === "all") return true;
        return state.filters.category === prod.category;
      })
      .filter((prod) => {
        if (state.filters.company === "all") return true;
        return state.filters.company === prod.company;
      })
      .filter((prod) => {
        if (state.filters.color === "all") return true;
        return prod.colors.includes(state.filters.color);
      })
      .filter((prod) => prod.price <= state.filters.price)
      .filter((prod) => {
        if (!state.filters.shipping) return true;
        return prod.shipping;
      });
    dispatch({ type: FILTER_PRODUCTS, payload: sortProducts(newProductList) });
  };

  const updateFilters = (e) => {
    dispatch({ type: UPDATE_FILTERS, payload: e.target });
  };

  const clearFilters = () => {
    dispatch({
      type: CLEAR_FILTERS,
      payload: { ...initialState.filters, price: maxPrice },
    });
  };

  useEffect(() => {
    dispatch({
      type: UPDATE_FILTERS,
      payload: { name: "price", value: maxPrice },
    });
  }, [products]);

  useEffect(() => {
    filterProducts();
  }, [state.filters]);

  useEffect(() => {
    dispatch({
      type: SORT_PRODUCTS,
      payload: sortProducts(state.filteredProducts),
    });
  }, [state.sortOption]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        products,
        setGridview,
        setListview,
        updateFilters,
        clearFilters,
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
