import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text:
      "Pick your furniture like you pick a wife; it should make you feel comfortable and look nice, but not so nice that if someone walks past it they want to steal it.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text:
      "The discipline of design is a blend of practicality and aspiration. Designers are always trying to make something more useful, and also more beautiful, than it was before.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text:
      "You cannot separate the old furniture from the memories and the memories from the old furniture!",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
