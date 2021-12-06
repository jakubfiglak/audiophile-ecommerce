import React from 'react';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { LinkButton } from '../buttons/LinkButton';
import { IImage } from '../../../graphql/types';

export type Props = {
  title: string;
  image: IImage | string;
  linkTo: string;
};

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 9rem 0 2.2rem;
`;

const imageStyles = css`
  position: absolute;
  width: 150px;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  ${imageStyles}
`;

const StyledImage = styled.img`
  ${imageStyles}
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
      {typeof image === 'string' ? (
        <StyledImage src={image} alt={title} />
      ) : (
        <StyledGatsbyImage image={image.data} alt={image.alt} />
      )}

      <StyledHeading>{title}</StyledHeading>
      <LinkButton to={linkTo} label="shop" />
    </StyledContainer>
  );
};
