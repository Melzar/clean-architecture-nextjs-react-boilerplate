import { PackageRest } from 'data/network/rest/v1/Packages/models/PackageRest';
import { productsRestToProductsDomain } from 'data/network/rest/v1/shared/Products/mappers/productRestToProductDomain';
import { Package } from 'domain/shared/Packages/models/Package';

export const packageRestToPackageDomain = ({
  name,
  id,
  products,
}: PackageRest): Package => ({
  name,
  id,
  products: productsRestToProductsDomain(products),
});

export const packagesRestToPackagesDomain = (
  packages: PackageRest[]
): Package[] => {
  return packages.map((packageRest) => packageRestToPackageDomain(packageRest));
};
