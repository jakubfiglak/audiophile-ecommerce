import { graphql } from 'gatsby';

export const imageData = graphql`
  fragment ImageData on SanityMainImage {
    alt
    asset {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
`;

export const responsiveImagesData = graphql`
  fragment ResponsiveImagesData on SanityResponsiveImages {
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
`;
