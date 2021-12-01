import React from 'react';
import { Link } from 'gatsby';
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

const styles = ({ secondary }: StylesProps) => css`
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: ${({ theme }) =>
    secondary ? theme.colors.white : theme.colors.primary};
  color: ${({ theme }) =>
    secondary ? theme.colors.black : theme.colors.white};
  padding: 1.5rem 3rem;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  ${secondary ? secondaryBorder : ''}

  :hover {
    background: ${({ theme }) =>
      secondary ? theme.colors.black : theme.colors.primaryLight};
    color: ${({ theme }) => (secondary ? theme.colors.white : '')};
  }
`;

const StyledButton = styled.button<StylesProps>`
  ${({ secondary }) => styles({ secondary })}
`;

const StyledLink = styled(Link)<StylesProps>`
  ${({ secondary }) => styles({ secondary })}
`;

export type CommonProps = StylesProps & { label: string };
export type ButtonProps = CommonProps & { onClick?: () => void };
export type LinkProps = CommonProps & { to: string };

export const Button = ({ label, secondary, onClick }: ButtonProps) => {
  return (
    <StyledButton secondary={secondary} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export const LinkButton = ({ label, secondary, to }: LinkProps) => {
  return (
    <StyledLink secondary={secondary} to={to}>
      {label}
    </StyledLink>
  );
};
