import React from 'react';
import styled from 'styled-components';

type StyleProps = {
  $small?: boolean;
};

const StyledContainer = styled.fieldset<StyleProps>`
  border: 0;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.colors.veryLightGray};

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    width: ${({ $small }) => ($small ? '3.2rem' : '4rem')};
    font-size: 1.3rem;
    line-height: 1.8rem;
    height: 100%;
    opacity: 0.25;
    padding: ${({ $small }) => ($small ? '0.7rem 0' : '1.5rem 0')};
    transition: ${({ theme }) => theme.transition};

    :hover {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 1;
    }
  }
`;

const StyledInput = styled.input<StyleProps>`
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: 0;
  background: transparent;
  padding: ${({ $small }) => ($small ? '0.7rem' : '1.5rem')};
  width: ${({ $small }) => ($small ? '3.2rem' : '4rem')};
  text-align: center;
`;

type Props = {
  value: number;
  onDecrementClick: () => void;
  onIncrementClick: () => void;
} & StyleProps;

export const NumberInput = ({
  value,
  onDecrementClick,
  onIncrementClick,
  $small,
}: Props) => {
  return (
    <StyledContainer $small={$small}>
      <button
        type="button"
        onClick={onDecrementClick}
        aria-label="decrease quantity"
      >
        -
      </button>
      <StyledInput type="text" value={value} disabled $small={$small} />
      <button
        type="button"
        onClick={onIncrementClick}
        aria-label="increase quantity"
      >
        +
      </button>
    </StyledContainer>
  );
};
