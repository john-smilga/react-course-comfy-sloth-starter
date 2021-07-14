export const formatPrice = (num) => {
  num = +num;
  if (num === 0) return "0";
  const decimals = num.toString().substr(-2);
  const integer = num
    .toString()
    .slice(0, -2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${integer}.${decimals}`;
};

export const getUniqueValues = (arr) => {
  return [...new Set(arr)];
};
