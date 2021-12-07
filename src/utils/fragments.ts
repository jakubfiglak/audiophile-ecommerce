import { graphql } from 'gatsby';

export const imageData = graphql`
  fragment ImageData on SanityMainImage {
    alt
    asset {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
`;
