'use client';

import React from 'react';

import styles from 'ui/Clients/Admin/clients.module.scss';

import { PageHeader } from 'ui/common/components/typography/PageHeader/PageHeader';
import { useClients } from 'ui/Clients/Admin/clients.hooks';

export const ClientsView = () => {
  const { clients } = useClients();

  return (
    <>
      <div className={styles.header} />
      <div className={styles.container}>
        <PageHeader>Clients</PageHeader>
        <div>{JSON.stringify(clients)}</div>
      </div>
    </>
  );
};
