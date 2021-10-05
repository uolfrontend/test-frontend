import React from "react";
import styled from "styled-components";
import Image from "next/image";

const SytledLoading = styled.div`
  width: 100%;
  margin: 3rem auto;
`;

export default function Loading() {
  return (
    <SytledLoading>
      <Image
        src="/images/Loading/Ellipsis-1.9s-200px.gif"
        alt="Circulos se movendo em animação de carregamento"
        width={200}
        height={200}
      />
    </SytledLoading>
  )
}