import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../buttons/LinkButton';

export type Props = {
  title: string;
  image: string;
  linkTo: string;
};

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  padding: 9rem 0 2.2rem;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 80%;
  left: 50%;
  top: -40%;
  transform: translateX(-50%);
`;

const StyledHeading = styled.h4`
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: uppercase;
  margin-bottom: 1.7rem;
  letter-spacing: 1.07px;
`;

export const CategoryCard = ({ title, image, linkTo }: Props) => {
  return (
    <StyledContainer>
      <StyledImg src={image} alt={title} />
      <StyledHeading>{title}</StyledHeading>
      <LinkButton to={linkTo} label="shop" />
    </StyledContainer>
  );
};
