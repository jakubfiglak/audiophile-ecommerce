import { IGatsbyImageData } from 'gatsby-plugin-image';
import { IResponsiveImages, IImage } from '../../graphql/types';
import { CategoryPageQuery } from '../../graphql/generated-types';
import { Products } from '../components/product-preview-section/types';

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
): IResponsiveImages {
  return {
    mobile: mapSanityMainImageToImageData(data.mobile),
    tablet: mapSanityMainImageToImageData(data.tablet),
    desktop: mapSanityMainImageToImageData(data.desktop),
  };
}

type SanityProductPreviewData = CategoryPageQuery['allSanityProduct']['nodes'];

export function mapSanityProductPreviewDataToProducts(
  data: SanityProductPreviewData
): Products {
  return data.map(
    ({ id, name, new: isNew, description, previewImages, slug }) => ({
      id,
      name,
      isNew,
      description,
      linkTo: slug.current,
      images: mapSanityResponsiveImagesToResponsiveImagesData(previewImages),
    })
  );
}

export function splitTitleToTwoLines(title: string) {
  const wordsArray = title.split(' ');
  return {
    firstLine: wordsArray.slice(0, wordsArray.length - 1).join(' '),
    secondLine: wordsArray[wordsArray.length - 1],
  };
}

export function formatPrice(price: number) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}
