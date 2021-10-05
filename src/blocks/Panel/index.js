import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPanel = styled.div`
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 1rem 1rem;
  max-width: 1000px;
`;

export default function Panel({ children }) {
  return (
    <StyledPanel>
      {children}
    </StyledPanel>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
}
