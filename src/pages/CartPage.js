import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cartItems } = useCartContext();
  if (cartItems.length > 0) {
    return (
      <Wrapper>
        <PageHero />
        <section className="section-center section">
          <CartContent />
        </section>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <section className="page-100 empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </section>
      </Wrapper>
    );
  }
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
