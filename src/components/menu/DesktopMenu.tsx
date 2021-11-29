import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  gap: 3.4rem;

  li {
    :hover a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  a {
    font-size: 1.3rem;
    line-height: 2.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transition};
    letter-spacing: 2px;
  }
`;

export type Props = {
  className?: string;
};

export const DesktopMenu = ({ className }: Props) => {
  return (
    <StyledContainer className={className}>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/headphones">headphones</Link>
      </li>
      <li>
        <Link to="/speakers">speakers</Link>
      </li>
      <li>
        <Link to="/earphones">earphones</Link>
      </li>
    </StyledContainer>
  );
};
