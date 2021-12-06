import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { LayoutContentWrapper } from '../../components/layout/LayoutContentWrapper';
import { CategoryPageQuery } from '../../../graphql/generated-types';
import { ExtraMenu } from '../../components/menu/ExtraMenu';
import { AboutSection } from '../../components/about-section/AboutSection';

export const query = graphql`
  fragment ImageData on SanityMainImage {
    alt
    asset {
      gatsbyImageData
    }
  }
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
        slug {
          current
        }
      }
    }
  }
`;

type Props = PageProps<CategoryPageQuery>;

const CategoryPage = ({ data }: Props) => {
  return (
    <LayoutContentWrapper>
      <pre style={{ marginTop: 200 }}>{JSON.stringify(data, null, 2)}</pre>
      <ExtraMenu />
      <AboutSection />
    </LayoutContentWrapper>
  );
};

export default CategoryPage;
