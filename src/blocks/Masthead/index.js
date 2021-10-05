import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

const StyledMasthead = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999999;
`;

export default function Masthead() {
  return (
    <StyledMasthead>
      <Header />
    </StyledMasthead>
  );
}
