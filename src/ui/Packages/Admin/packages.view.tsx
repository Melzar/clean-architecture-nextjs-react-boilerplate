'use client';

import React from 'react';

import { PageHeader } from 'ui/common/components/typography/PageHeader/PageHeader';

import styles from 'ui/Packages/Admin/packages.module.scss';
import { usePackages } from 'ui/Packages/Admin/packages.hooks';

export const PackagesView = () => {
  const { packages } = usePackages();

  return (
    <>
      <div className={styles.header} />
      <div className={styles.container}>
        <PageHeader>Packagess</PageHeader>
        <div>{JSON.stringify(packages)}</div>
      </div>
    </>
  );
};
