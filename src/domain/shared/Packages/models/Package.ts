import { Product } from 'domain/Packages/models/Product';

export type PackageStatus =
  | 'processing'
  | 'shipped'
  | 'in_transit'
  | 'delivered'
  | 'attention_needed'
  | 'cancelled';

export type Package = {
  name: string;
  id: string;
  status: PackageStatus;
  products: Product[];
};
