import React from 'react';
import { graphql, navigate } from 'gatsby';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';
import { LayoutContentWrapper } from '../../components/layout/LayoutContentWrapper';
import { ExtraMenu } from '../../components/menu/ExtraMenu';
import { AboutSection } from '../../components/about-section/AboutSection';
import { ProductPageQuery } from '../../../graphql/generated-types';

const StyledGoBackButton = styled.button`
  margin-top: ${({ theme }) => `calc(${theme.navHeight} + 2rem)`};
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: 0.5;
  background: none;
  border: none;
  padding: 0;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

type Props = PageProps<ProductPageQuery>;

const ProductPage = ({ data }: Props) => {
  return (
    <LayoutContentWrapper>
      <StyledGoBackButton
        onClick={() => navigate(-1)}
        aria-label="Go to previous page"
      >
        Go Back
      </StyledGoBackButton>
      <ExtraMenu />
      <AboutSection />
    </LayoutContentWrapper>
  );
};

export const query = graphql`
  query ProductPage($id: String!) {
    sanityProduct(id: { eq: $id }) {
      name
      new
      productImages {
        ...ResponsiveImagesData
      }
      description
      price
      features {
        _rawChildren
      }
      includes {
        name
        quantity
      }
      gallery {
        ...ResponsiveImagesData
      }
      related {
        id
        name
        slug {
          current
        }
      }
    }
  }
`;

export default ProductPage;
