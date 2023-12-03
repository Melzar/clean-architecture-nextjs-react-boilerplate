import { Product } from 'domain/Packages/models/Product';

export type Package = {
  name: string;
  id: string;
  products: Product[];
};
