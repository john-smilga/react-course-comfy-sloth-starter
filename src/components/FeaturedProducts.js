import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const { isLoading, products } = useProductsContext();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <section className="section section-center">
        <div className="title center">
          <h2>featured products</h2>
        </div>
        <div className="featured">
          {products
            .sort((a, b) => 0.5 - Math.random())
            .slice(0, 3)
            .map((product) => {
              return <Product key={product.id} {...product} />;
            })}
        </div>
        <Link className="btn" to="/products">
          all products
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
