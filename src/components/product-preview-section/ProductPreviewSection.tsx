import React from 'react';
import styled from 'styled-components';
import { breakpointFrom } from '../../styles/breakpoints';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { ProductPreviewCard } from './ProductPreviewCard';
import { Products } from './types';

const StyledContainer = styled.section`
  margin: 6.4rem 0 17.2rem;

  ${breakpointFrom('tablet')} {
    margin-top: 12rem;
  }

  ${breakpointFrom('desktop')} {
    margin: 16rem 0 24rem;
  }
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

type Props = { products: Products };

export const ProductPreviewSection = ({ products }: Props) => {
  return (
    <StyledContainer>
      <LayoutContentWrapper>
        <StyledCardsContainer>
          {products.map(({ id, ...rest }) => (
            <ProductPreviewCard key={id} {...rest} />
          ))}
        </StyledCardsContainer>
      </LayoutContentWrapper>
    </StyledContainer>
  );
};
