import { IGatsbyImageData } from 'gatsby-plugin-image';
import { IHeroImages, IImage } from '../../graphql/types';

export type SanityImageData = {
  alt: string;
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
};

export type SanityHeroImagesData = {
  mobile: SanityImageData;
  tablet: SanityImageData;
  desktop: SanityImageData;
};

export function mapSanityMainImageToImageData(image: SanityImageData): IImage {
  return {
    data: image.asset.gatsbyImageData,
    alt: image.alt,
  };
}

export function mapSanityResponsiveImagesToResponsiveImagesData(
  data: SanityHeroImagesData
): IHeroImages {
  return {
    mobile: mapSanityMainImageToImageData(data.mobile),
    tablet: mapSanityMainImageToImageData(data.tablet),
    desktop: mapSanityMainImageToImageData(data.desktop),
  };
}
