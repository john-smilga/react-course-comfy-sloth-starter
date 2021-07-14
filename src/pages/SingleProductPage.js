import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import {
  single_product_url,
  single_product_url as url,
} from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const { isLoading, product, fetchData } = useProductsContext();

  const { images, name, description, price, stars, reviews, company, stock } =
    product;

  useEffect(() => {
    fetchData(`${single_product_url}${id}`);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <PageHero name={name} />
      <section className="section section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          {images && <ProductImages img={images} name={name} />}
          <article>
            <h1>{name}</h1>
            <Stars stars={stars} reviews={reviews} />
            <h2 className="price">${formatPrice(price)}</h2>
            <p className="desc">{description}</p>
            <div className="info">
              <span>available</span>
              <p>{stock > 0 ? "in stock" : "out of stock"}</p>
              <span>SKU</span>
              <p>{id}</p>
              <span>brand</span>
              <p>{company}</p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
