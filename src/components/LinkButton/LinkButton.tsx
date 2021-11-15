import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ArrowRight from '../../assets/svg/icon-arrow-right.svg';

export type Props = {
  label: string;
  to: string;
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};

  span {
    margin-right: 1.3rem;
    opacity: 0.5;
    transition: all 0.2s;
  }

  :hover {
    span {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 1;
    }
  }
`;

export const LinkButton = ({ to, label }: Props) => {
  return (
    <StyledLink to={to}>
      <span>{label}</span>
      <ArrowRight />
    </StyledLink>
  );
};
