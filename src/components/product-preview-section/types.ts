import { IResponsiveImages } from '../../../graphql/types';

export type SingleProduct = {
  images: IResponsiveImages;
  isNew: boolean;
  name: string;
  description: string;
  linkTo: string;
};

export type Products = Array<SingleProduct & { id: string }>;
