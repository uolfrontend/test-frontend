import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  border: 2px solid #e59732;
  border-radius: 10px;
  cursor: pointer;

  ${({ variant }) =>
    variant === "secondary" ? SecondaryButton : PrimaryButton}

  ${({ disabled }) => disabled === true ? DisabledButton : null}
`;

const SecondaryButton = css`
  background-color: transparent;
  color: #e59732;
  &:hover {
    background-color: #e59732;
    color: #fff;
  }
`;

const PrimaryButton = css`
  background-color: #e59732;
  color: #fff;
  transition: 0.2s;
  &:hover {
    background-color: transparent;
    color: #e59732;
  }
`;

const DisabledButton = css`
  background-color: lightgray;
  border-color: lightgray;
  color: white;
  pointer-events: none;
`;

export default function Button({ children, variant, href, disabled }) {
  const hasHref = () => {
    if (href) {
      return (
        <Link href={href} passHref>
          <a>
            <StyledButton variant={variant} disabled={disabled}>
              {children}
            </StyledButton>
          </a>
        </Link>
      );
    } else {
      return (
        <StyledButton variant={variant} disabled={disabled}>
          {children}
        </StyledButton>
      );
    }
  };

  return <>{hasHref()}</>;
}

Button.defaultProps = {
  disabled: false,
  variant: "primary",
  href: undefined
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
}
