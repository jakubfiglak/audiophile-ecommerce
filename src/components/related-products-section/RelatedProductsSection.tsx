import React from 'react';
import styled from 'styled-components';
import { Products } from './types';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { RelatedProductCard } from './RelatedProductCard';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledSection = styled.section`
  margin-top: 12rem;
  text-align: center;
`;

const StyledHeading = styled.h2`
  margin-bottom: 4.8rem;
  font-size: 2.4rem;
  line-height: 3.6rem;
  letter-spacing: 0.9px;

  ${breakpointFrom('tablet')} {
    margin-bottom: 5.6rem;
    font-size: 3.2rem;
  }

  ${breakpointFrom('desktop')} {
    margin-bottom: 6.4rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;

  ${breakpointFrom('tablet')} {
    flex-direction: row;
    gap: 1rem;
  }

  ${breakpointFrom('desktop')} {
    gap: 3rem;
  }
`;

type Props = { products: Products };

export const RelatedProductsSection = ({ products }: Props) => {
  return (
    <StyledSection>
      <LayoutContentWrapper>
        <StyledHeading>You may also like</StyledHeading>
        <StyledContainer>
          {products.map(({ id, ...rest }) => (
            <RelatedProductCard key={id} {...rest} />
          ))}
        </StyledContainer>
      </LayoutContentWrapper>
    </StyledSection>
  );
};
