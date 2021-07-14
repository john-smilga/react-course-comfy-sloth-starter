import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { isGridviewSet } = useFilterContext();
  const { filteredProducts } = useFilterContext();
  return isGridviewSet ? (
    <GridView products={filteredProducts} />
  ) : (
    <ListView products={filteredProducts} />
  );
};

export default ProductList;
