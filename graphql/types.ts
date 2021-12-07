import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IImage {
  data: IGatsbyImageData;
  alt: string;
}

export interface IResponsiveImages {
  mobile: IImage;
  tablet: IImage;
  desktop: IImage;
}
