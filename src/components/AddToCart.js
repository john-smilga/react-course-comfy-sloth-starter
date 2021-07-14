import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const [color, setColor] = useState(product.colors[0]);
  const [amount, setAmount] = useState(1);

  const updateAmount = (method, _, __) => {
    if (method === "dec") {
      if (amount === 1) {
        setAmount(1);
      } else setAmount(amount - 1);
    } else if (method === "inc") {
      if (amount === product.stock) {
        setAmount(product.stock);
      } else {
        setAmount(amount + 1);
      }
    }
  };
  return (
    <Wrapper>
      <div className="colors">
        <span>colors</span>
        <div>
          {product.colors.map((col, idx) => (
            <button
              key={idx}
              style={{ backgroundColor: col }}
              className={`color-btn ${col === color && "active"}`}
              onClick={() => setColor(col)}
            >
              {col === color && <FaCheck />}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          color={color}
          handleSubmit={updateAmount}
          product={product}
        />
      </div>
      <Link
        to="/cart"
        className="btn"
        onClick={() => addToCart({ id: product.id, product, color, amount })}
      >
        add to cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
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
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
