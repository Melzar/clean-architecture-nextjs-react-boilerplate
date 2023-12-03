import { ProductRest } from 'data/network/rest/v1/Packages/models/ProductRest';

export type PackageRest = {
  id: string;
  name: string;
  products: ProductRest[];
};
