import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledHeaderBar = styled.div`
  display: flex;
  width: 100%;
  background-color: #333333;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export default function Header() {
  return (
    <StyledHeaderBar>
      <Image
        src="/images/Logos/uol-logo-full.svg"
        alt="UOL Logo"
        width={100}
        height={40}
      />
    </StyledHeaderBar>
  );
}
