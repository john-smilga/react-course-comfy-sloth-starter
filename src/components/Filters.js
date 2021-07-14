import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    products,
    filters: { query, category, company, color, price, shipping },
    updateFilters,
    clearFilters,
  } = useFilterContext();
  const { categories, companies, colors, prices } = products.reduce(
    (acc, curr) => {
      acc.categories = getUniqueValues(acc.categories.concat(curr.category));
      acc.companies = getUniqueValues(acc.companies.concat(curr.company));
      acc.colors = getUniqueValues(acc.colors.concat(curr.colors));
      acc.prices = getUniqueValues(acc.prices.concat(curr.price)).sort(
        (a, b) => a - b
      );
      return acc;
    },
    { categories: [], companies: [], colors: [], prices: [] }
  );
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="query"
              value={query}
              onChange={updateFilters}
              onBlur={updateFilters}
              className="search-input"
              placeholder="search"
            />
          </div>
          <div className="form-control">
            <h5>category</h5>
            <button
              name="category"
              value="all"
              onClick={updateFilters}
              className={`${category === "all" && "active"}`}
            >
              all
            </button>
            {categories.map((cat, index) => (
              <button
                key={index}
                name="category"
                value={cat}
                onClick={updateFilters}
                className={`${category === cat && "active"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              onBlur={updateFilters}
              className="company"
            >
              <option value="all">all</option>
              {companies.map((comp, index) => (
                <option key={index} value={comp}>
                  {comp}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              <button
                name="color"
                value="all"
                className={`all-btn ${color === "all" && "active"}`}
                onClick={updateFilters}
              >
                all
              </button>
              {colors.map((col, index) => (
                <button
                  key={index}
                  name="color"
                  value={col}
                  className={`color-btn ${color === col && "active"}`}
                  style={{ backgroundColor: col }}
                  onClick={updateFilters}
                >
                  {color === col && <FaCheck />}
                </button>
              ))}
            </div>
          </div>
          <div className="form-control">
            <h5>price</h5>
            <p className="price">${formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              id="price"
              value={price}
              onChange={updateFilters}
              onBlur={updateFilters}
              min={prices[0]}
              max={prices[prices.length - 1]}
            />
          </div>
          <div className="form-control">
            <label htmlFor="shipping" className="shipping">
              free shipping
              <input
                id="shipping"
                type="checkbox"
                name="shipping"
                onChange={updateFilters}
                checked={shipping}
              />
            </label>
          </div>
          <button className="clear-btn" onClick={clearFilters}>
            clear filters
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    text-transform: capitalize;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
