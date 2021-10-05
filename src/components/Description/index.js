import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import PropTypes from 'prop-types';

const StyledDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  flex-direction: row;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }

  button {
    margin-top: 1rem;
  }
`

export default function Description({ title, subtitle, buttonText, buttonVariant, buttonHref }) {
  const hasButton = () => {
    if (buttonText) {
      return (
        <Button variant={buttonVariant} href={buttonHref}>
          {buttonText}
        </Button>
      )
    }
  }

  return (
    <StyledDescription>
      <div>
        <p><strong>{title}</strong></p>
        <p>{subtitle}</p>
      </div>
      {
        hasButton()
      }
    </StyledDescription>
  )
}

Description.defaultProps = {
  subtitle: null,
  buttonText: null,
  buttonVariant: null,
  buttonHref: null
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.string,
  buttonHref: PropTypes.string
}