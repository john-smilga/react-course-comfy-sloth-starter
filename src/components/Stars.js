import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const starsGen = (starNum) => {
  if (typeof starNum === "number" && starNum >= 0 && starNum <= 5) {
    const floor = Math.floor(starNum);
    const stars = Array.from({ length: 5 }, (_, idx) => {
      if (idx + 1 <= floor) {
        return <BsStarFill />;
      } else if (starNum > idx && starNum < idx + 1) {
        if (starNum - floor < 0.5) {
          return <BsStarHalf />;
        } else {
          return <BsStarFill />;
        }
      } else {
        return <BsStar />;
      }
    });
    return stars;
  }
  return [];
};

const Stars = ({ stars, reviews }) => {
  const starIcons = starsGen(stars);
  return (
    <Wrapper>
      {starIcons.map((star, idx) => {
        return <span key={idx}>{star}</span>;
      })}
      <p>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
