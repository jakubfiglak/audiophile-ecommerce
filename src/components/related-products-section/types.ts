import type { IResponsiveImages } from '../../../graphql/types';

export type Product = {
  images: IResponsiveImages;
  name: string;
  slug: string;
};

export type Products = Array<Product & { id: string }>;
