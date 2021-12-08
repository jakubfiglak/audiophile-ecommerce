import React from 'react';
import { graphql, navigate } from 'gatsby';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';
import { LayoutContentWrapper } from '../../components/layout/LayoutContentWrapper';
import { ExtraMenu } from '../../components/menu/ExtraMenu';
import { AboutSection } from '../../components/about-section/AboutSection';
import { ProductPageQuery } from '../../../graphql/generated-types';
import { ProductDetailsSection } from '../../components/product-details-section/ProductDetailsSection';
import {
  mapSanityRelatedProductsDataToRelatedProducts,
  mapSanityResponsiveImagesToResponsiveImagesData,
} from '../../utils/helpers';
import { ProductAdditionalInfoSection } from '../../components/product-additional-info-section/ProductAdditionalInfoSection';
import { ProductGallerySection } from '../../components/product-gallery-section/ProductGallerySection';
import { RelatedProductsSection } from '../../components/related-products-section/RelatedProductsSection';

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
  const product = data.sanityProduct;
  const {
    productImages,
    name,
    new: isNew,
    price,
    description,
    includes,
    _rawFeatures,
    gallery,
    related,
  } = product;

  return (
    <>
      <LayoutContentWrapper>
        <StyledGoBackButton
          onClick={() => navigate(-1)}
          aria-label="Go to previous page"
        >
          Go Back
        </StyledGoBackButton>
      </LayoutContentWrapper>
      <ProductDetailsSection
        productImages={mapSanityResponsiveImagesToResponsiveImagesData(
          productImages
        )}
        isNew={isNew}
        name={name}
        price={price}
        description={description}
      />
      <ProductAdditionalInfoSection
        features={_rawFeatures}
        boxContent={includes}
      />
      <ProductGallerySection
        galleryItemOneImages={mapSanityResponsiveImagesToResponsiveImagesData(
          gallery[0]
        )}
        galleryItemTwoImages={mapSanityResponsiveImagesToResponsiveImagesData(
          gallery[1]
        )}
        galleryItemThreeImages={mapSanityResponsiveImagesToResponsiveImagesData(
          gallery[2]
        )}
      />
      <RelatedProductsSection
        products={mapSanityRelatedProductsDataToRelatedProducts(related)}
      />
      <ExtraMenu />
      <AboutSection />
    </>
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
      _rawFeatures
      includes {
        name
        quantity
      }
      gallery {
        ...ResponsiveImagesData
      }
      related {
        id
        shortName
        slug {
          current
        }
        thumbnailImages {
          ...ResponsiveImagesData
        }
      }
    }
  }
`;

export default ProductPage;
