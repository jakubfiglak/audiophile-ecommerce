import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';
import { LayoutContentWrapper } from '../../components/layout/LayoutContentWrapper';
import { CategoryPageQuery } from '../../../graphql/generated-types';
import { ExtraMenu } from '../../components/menu/ExtraMenu';
import { AboutSection } from '../../components/about-section/AboutSection';
import { breakpointFrom } from '../../styles/breakpoints';
import { ProductPreviewSection } from '../../components/product-preview-section/ProductPreviewSection';
import { mapSanityProductPreviewDataToProducts } from '../../utils/helpers';

const StyledHeading = styled.h1`
  margin-top: ${({ theme }) => theme.navHeight};
  padding: 3.2rem 0;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.8rem;
  line-height: 3.8rem;
  letter-spacing: 2px;
  text-align: center;

  ${breakpointFrom('tablet')} {
    padding: 9.7rem 0;
    font-size: 4rem;
    line-height: 4.4rem;
    letter-spacing: 1.4px;
  }
`;

export const query = graphql`
  query CategoryPage($id: String!) {
    sanityCategory(id: { eq: $id }) {
      name
    }

    allSanityProduct(
      filter: { category: { id: { eq: $id } } }
      sort: { fields: orderRank, order: ASC }
    ) {
      nodes {
        id
        name
        new
        description
        previewImages {
          ...ResponsiveImagesData
        }
        slug {
          current
        }
      }
    }
  }
`;

type Props = PageProps<CategoryPageQuery>;

const CategoryPage = ({ data }: Props) => {
  const category = data.sanityCategory;
  const products = data.allSanityProduct.nodes;

  return (
    <>
      <StyledHeading>
        <LayoutContentWrapper>{category.name}</LayoutContentWrapper>
      </StyledHeading>
      <ProductPreviewSection
        products={mapSanityProductPreviewDataToProducts(products)}
      />
      <ExtraMenu />
      <AboutSection />
    </>
  );
};

export default CategoryPage;
