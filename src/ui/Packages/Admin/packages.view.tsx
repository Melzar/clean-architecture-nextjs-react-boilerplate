import React from 'react';

import { PageHeader } from 'ui/common/components/typography/PageHeader/PageHeader';

import styles from 'ui/Packages/Admin/packages.module.scss';

export const PackagesView = () => {
  return (
    <>
      <div className={styles.header} />
      <div className={styles.container}>
        <PageHeader>Packages</PageHeader>
      </div>
    </>
  );
};
