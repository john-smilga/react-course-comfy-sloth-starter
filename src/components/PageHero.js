import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ name }) => {
  const path = window.location.pathname.toString().match(/(\/\w+)/g);
  if (path.length === 1) {
    return (
      <Wrapper>
        <Link to="/">
          <h3>home</h3>
        </Link>
        <h3>{path[0].replace(/\//, "/ ")}</h3>
      </Wrapper>
    );
  }
  if (path.length === 2) {
    return (
      <Wrapper>
        <Link to="/">
          <h3>home</h3>
        </Link>
        <Link to="/products">
          <h3>/ products</h3>
        </Link>
        <h3>{"/ " + name}</h3>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>Error</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  padding-left: 3rem;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
