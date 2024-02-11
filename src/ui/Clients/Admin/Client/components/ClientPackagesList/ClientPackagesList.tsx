'use client';

import { RxDotsVertical } from 'react-icons/rx';

import React from 'react';

import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';
import styles from 'ui/Clients/Admin/Client/components/ClientPackagesList/clientPackagesList.module.scss';
import { getPackageStatusIcon } from 'ui/Packages/Admin/packages.partials';

import { Container } from 'ui/common/components/layout/Container/Container';
import { ContainerHeader } from 'ui/common/components/typography/ContainerHeader/ContainerHeader';

import { useClientPackagesList } from 'ui/Clients/Admin/Client/components/ClientPackagesList/clientPackagesList.hooks';
import { PRODUCTS_TEXT_HEADER } from 'ui/Clients/Admin/Client/components/ClientPackagesList/clientPackagesList.dictionary';

export const ClientPackagesList = () => {
  const { packages, isPackageSelected, onRowClick } = useClientPackagesList();

  return (
    <>
      {packages.map((pack, index) => (
        <>
          <ListRow
            key={pack.id}
            onClick={onRowClick(pack.id)}
            testId={`client-package-row-${index}`}
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
                {PRODUCTS_TEXT_HEADER}
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
