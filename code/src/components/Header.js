import React from "react";

import styled from "styled-components/macro";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeadlineHighlight>What</HeadlineHighlight>
      <Headline>are you eating?<span role='img' aria-label='cookie'>🍪</span></Headline>
      <HeaderText>
        Here you can find out how much fat, protein, sugars and calories there
        are in what you are eating!
      </HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: 2.2em;
  text-align: center;
  margin: 0 0 5px 0;
`;

const HeadlineHighlight = styled.h1`
  font-size: 5em;
  margin: 0;
`

const HeaderText = styled.p`
  text-align: center;
  padding-bottom: 1em;
  width: 80%;
`;
