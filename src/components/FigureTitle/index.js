import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledFigureTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;

  h1 {
    font-weight: 300;
    padding-left: 1.5rem;
    margin: 0;

    @media (max-width: 1023px) {
      font-size: 1.75rem;
    }
  }
`;

export default function FigureTitle({ imageFile, imageAlt, copy }) {
  return (
    <StyledFigureTitle>
      <Image
        src={`/images/Icons/${imageFile}`}
        alt={imageAlt}
        width={30}
        height={30}
      />
      <h1>{copy}</h1>
    </StyledFigureTitle>
  );
}
