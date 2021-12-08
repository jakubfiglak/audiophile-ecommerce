import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.colors.veryLightGray};

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    width: 4rem;
    font-size: 1.3rem;
    line-height: 1.8rem;
    height: 100%;
    opacity: 0.25;
    padding: 1.5rem 0;
    transition: ${({ theme }) => theme.transition};

    :hover {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 1;
    }
  }
`;

const StyledInput = styled.input`
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: 0;
  background: transparent;
  padding: 1.5rem;
  width: 4rem;
`;

export const NumberInput = () => {
  const [value, setValue] = useState(1);

  function handleDecrement() {
    if (value > 1) {
      setValue(value - 1);
    }
  }

  function handleIncrement() {
    if (value < 9) {
      setValue(value + 1);
    }
  }

  return (
    <StyledContainer>
      <button
        type="button"
        onClick={handleDecrement}
        aria-label="decrease quantity"
      >
        -
      </button>
      <StyledInput type="number" value={value} disabled />
      <button
        type="button"
        onClick={handleIncrement}
        aria-label="increase quantity"
      >
        +
      </button>
    </StyledContainer>
  );
};
