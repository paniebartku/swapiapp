import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";
import Item from "../components/Item/Item";

const StyledWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 10rem;
`;

const MainTemplate = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <Item />
    </StyledWrapper>
  </>
);

export default MainTemplate;
