'use client';

import { RxDotsVertical } from 'react-icons/rx';

import React from 'react';

import { usePackagesList } from 'ui/Packages/Admin/components/PackagesList/packagesList.hooks';
import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';
import styles from 'ui/Packages/Admin/packages.module.scss';
import { getPackageStatusIcon } from 'ui/Packages/Admin/packages.partials';
import { Container } from 'ui/common/components/layout/Container/Container';
import { ContainerHeader } from 'ui/common/components/typography/ContainerHeader/ContainerHeader';
import { Package } from 'presentation/shared/Packages/models/Package';

export const PackagesList = () => {
  const { packages, onRowClick, isPackageSelected } = usePackagesList();

  return (
    <>
      {packages.map((pack: Package, index) => (
        <>
          <ListRow
            key={pack.id}
            onClick={onRowClick(pack.id)}
            testId={`package-row-${index}`}
          >
            <div className={styles.rowId}>{pack.id}</div>
            <div className={styles.rowName}>{pack.name}</div>
            <div className={styles.rowStatus}>
              {getPackageStatusIcon(pack.status)}
            </div>
            <div>
              <RxDotsVertical className={styles.itemActions} />
            </div>
          </ListRow>
          {isPackageSelected(pack.id) && (
            <Container>
              <ContainerHeader className={styles.productsHeader}>
                Products
              </ContainerHeader>
              <div className={styles.productsContent}>
                {pack.products.map((product) => (
                  <div className={styles.productWrapper}>
                    <div>ID: {product.id}</div>
                    <div>{product.productName}</div>
                  </div>
                ))}
              </div>
            </Container>
          )}
        </>
      ))}
    </>
  );
};
