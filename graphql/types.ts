import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IImage {
  data: IGatsbyImageData;
  alt: string;
}

export interface IHeroImages {
  mobile: IImage;
  tablet: IImage;
  desktop: IImage;
}
