import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { LayoutContentWrapper } from '../../components/layout/LayoutContentWrapper';
import { ExtraMenu } from '../../components/menu/ExtraMenu';
import { AboutSection } from '../../components/about-section/AboutSection';
import { ProductPageQuery } from '../../../graphql/generated-types';

export const query = graphql`
  fragment ImageData on SanityMainImage {
    alt
    asset {
      gatsbyImageData
    }
  }

  query ProductPage($id: String!) {
    sanityProduct(id: { eq: $id }) {
      name
      new
      productImages {
        mobile {
          ...ImageData
        }
        tablet {
          ...ImageData
        }
        desktop {
          ...ImageData
        }
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
        mobile {
          ...ImageData
        }
        tablet {
          ...ImageData
        }
        desktop {
          ...ImageData
        }
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

type Props = PageProps<ProductPageQuery>;

const ProductPage = ({ data }: Props) => {
  return (
    <LayoutContentWrapper>
      <pre style={{ marginTop: 200 }}>{JSON.stringify(data, null, 2)}</pre>
      <ExtraMenu />
      <AboutSection />
    </LayoutContentWrapper>
  );
};

export default ProductPage;
