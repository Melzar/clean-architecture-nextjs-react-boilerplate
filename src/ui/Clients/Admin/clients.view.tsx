import React from 'react';

import styles from 'ui/Clients/Admin/clients.module.scss';

import { PageHeader } from 'ui/common/components/typography/PageHeader/PageHeader';

export const ClientsView = () => {
  return (
    <>
      <div className={styles.header} />
      <div className={styles.container}>
        <PageHeader>Clients</PageHeader>
      </div>
    </>
  );
};
