import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="About"/>
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk"/>
       <article>
        <div className="title">
          <h2>about the design</h2>
          <div className="underline"></div>
        </div>
        <p>There are similar characteristics to be found in both styles. This is likely where much of the confusion stems from when trying to distinguish them. Both styles tend to favor simple, uncluttered spaces with smooth, clean lines and artistic flair. This imparts a comfortable and calming feeling in a room that is very inviting.</p>
      </article>
    </Wrapper>
  </main>
}

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
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
