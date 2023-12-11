import { ProductRest } from 'data/network/rest/v1/Packages/models/ProductRest';

export type PackageStatusRest =
  | 'processing'
  | 'shipped'
  | 'in_transit'
  | 'delivered'
  | 'attention_needed'
  | 'cancelled';

export type PackageRest = {
  id: string;
  name: string;
  status: PackageStatusRest;
  products: ProductRest[];
};
