import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export type StylesProps = {
  $secondary?: boolean;
  $tertiary?: boolean;
};

const secondaryBorder = css`
  position: relative;

  ::after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }
`;

const styles = ({ $secondary, $tertiary }: StylesProps) => css`
  display: inline-block;
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: ${({ theme }) => theme.colors.primary};
  background: ${() => $secondary && 'transparent'};
  background: ${({ theme }) => $tertiary && theme.colors.black};
  color: ${({ theme }) =>
    $secondary ? theme.colors.black : theme.colors.white};
  padding: 1.5rem 3rem;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  ${$secondary ? secondaryBorder : ''}

  :hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    background: ${({ theme }) => $secondary && theme.colors.black};
    background: ${({ theme }) => $tertiary && theme.colors.gray};
    color: ${({ theme }) => ($secondary ? theme.colors.white : '')};
  }
`;

const StyledButton = styled.button<StylesProps>`
  ${({ $secondary, $tertiary }) => styles({ $secondary, $tertiary })}
`;

const StyledLink = styled(Link)<StylesProps>`
  ${({ $secondary, $tertiary }) => styles({ $secondary, $tertiary })}
`;

export type CommonProps = StylesProps & { label: string };
export type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
export type LinkProps = CommonProps & { to: string };

export const Button = ({
  label,
  $secondary,
  $tertiary,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton $secondary={$secondary} $tertiary={$tertiary} {...rest}>
      {label}
    </StyledButton>
  );
};

export const LinkButton = ({ label, $secondary, $tertiary, to }: LinkProps) => {
  return (
    <StyledLink $secondary={$secondary} $tertiary={$tertiary} to={to}>
      {label}
    </StyledLink>
  );
};
