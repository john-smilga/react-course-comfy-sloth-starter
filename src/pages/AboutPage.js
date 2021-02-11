import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
            <p>
              I live in a craftsman house, but I'm a big fan of modernist and
              mid-century furniture and architecture, too. But my dream is to do
              a truly original chair design, something that is all these
              different things but is my own, too.
              <br />
              I love building spaces: architecture, furniture, all of it,
              probably more than fashion. The development procedure is more
              tactile. It's about space and form and it's something you can
              share with other people.
              <br />I paid my way through college as a carpenter and a
              woodworker. So I've built the house I live in and most of the
              furniture that's in it, and I do a lot of woodworking still.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
