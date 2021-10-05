import React from "react";
import styled from "styled-components";

const StyledDisclaimer = styled.footer`
  margin: 1.5rem 0;
  p {
    margin: 0;
    padding: 0;
  }
`;

export default function Disclaimer({ customers }) {
  return (
    <StyledDisclaimer>
      <p>Exibindo {customers} clientes.</p>
    </StyledDisclaimer>
  )
}