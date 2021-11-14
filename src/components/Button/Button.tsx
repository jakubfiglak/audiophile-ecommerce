import React from 'react';
import styled, { css } from 'styled-components';

export type StylesProps = {
  secondary?: boolean;
};

const secondaryBorder = css`
  position: relative;

  ::after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }
`;

const StyledButton = styled.button<StylesProps>`
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: ${({ secondary, theme }) =>
    secondary ? theme.colors.white : theme.colors.primary};
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.black : theme.colors.white};
  padding: 1.5rem 3rem;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  ${({ secondary }) => (secondary ? secondaryBorder : '')}

  :hover {
    background: ${({ theme, secondary }) =>
      secondary ? theme.colors.black : theme.colors.primaryLight};
    color: ${({ theme, secondary }) => (secondary ? theme.colors.white : '')};
  }
`;

export type Props = StylesProps & { label: string };

export const Button = ({ label, secondary }: Props) => {
  return <StyledButton secondary={secondary}>{label}</StyledButton>;
};
