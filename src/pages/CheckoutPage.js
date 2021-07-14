import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero />
      <section className="">
        <Wrapper>
          <StripeCheckout />
        </Wrapper>
      </section>
    </main>
  );
};
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 1rem 0;
`;
export default CheckoutPage;
