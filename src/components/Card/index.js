import React from "react";
import styled, { css } from "styled-components";
import Button from "../Button";
import PropTypes from 'prop-types'

const StyledCard = styled.article`
  width: 100%;
  border: 2px solid rgba(0,0,0,0.15);
  border-radius: 5px;
  margin: 1.5rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media (max-width: 1023px) {
    width: 100%;
    & + div {
      padding-top: 1rem;
    }
  }

  p {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    &:nth-child(2){
      font-weight: 300;
    }
  }
`;

const StyledStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25%;

  @media (max-width: 1023px) {
    width: 100%;
    & + div {
      padding-top: 2rem;
    }
  }

  p {
    margin: 0;
    padding: 0 0 0 0.5rem;
  }
`;

const StyledDot = css`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: inline-block;
`

const StyledDotGreen = styled.span`
  ${StyledDot}
  background-color: #44a256;
`;

const StyledDotRed = styled.span`
  ${StyledDot}
  background-color: #d02b39;
`;

const StyledDotYellow = styled.span`
  ${StyledDot}
  background-color: #cd9b28;
`;

const StyledDotGray = styled.span`
  ${StyledDot}
  background-color: #cccccc;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25%;

  @media (max-width: 1023px) {
    width: 100%;
    justify-content: center;
  }
`;

export default function Card({ name, email, cpf, phone, status, href }) {
  const statusChecker = () => {
    switch (status) {
      case "Ativo":
        return <StyledDotGreen />;
      case "Inativo":
        return <StyledDotRed />;
      case "Aguardando":
        return <StyledDotYellow />;
      case "Desativado":
        return <StyledDotGray />;
      default:
        return <StyledDotGray />;
    }
  }

  return (
    <StyledCard>
      <StyledInfoWrapper>
        <p>{name}</p>
        <p>{email}</p>
      </StyledInfoWrapper>
      <StyledInfoWrapper>
        <p>{cpf}</p>
        <p>{phone}</p>
      </StyledInfoWrapper>
      <StyledStatusWrapper>
        {
          statusChecker()
        }
        <p>{status}</p>
      </StyledStatusWrapper>
      <StyledButtonWrapper>
        <Button variant="secondary" href={href}>
          Editar
        </Button>
      </StyledButtonWrapper>
    </StyledCard>
  )
}

Card.defaultProps = {
  name: "",
  email: "",
  id: "",
  phone: "",
  status: "",
  href: "/"
};

Card.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  phone: PropTypes.string,
  status: PropTypes.string,
  href: PropTypes.string
};