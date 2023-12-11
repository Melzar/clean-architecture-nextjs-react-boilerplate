'use client';

import React from 'react';

import { RxDotsVertical } from 'react-icons/rx';

import styles from 'ui/Clients/Admin/clients.module.scss';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { useClients } from 'ui/Clients/Admin/clients.hooks';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';

export const ClientsView = () => {
  const { clients } = useClients();

  return (
    <>
      <PageHeader>
        <PageHeading>Clients</PageHeading>
      </PageHeader>
      <PageContainer>
        <PageSubHeader>
          <SectionHeader>Recent clients</SectionHeader>
        </PageSubHeader>
        {clients.map((client) => (
          <ListRow key={client.id} className={styles.row}>
            <div className={styles.rowId}>{client.id}</div>
            <div className={styles.rowName}>
              {client.firstName} {client.lastName}
            </div>
            <div className={styles.rowEmail}>{client.email}</div>
            <div>
              <RxDotsVertical className={styles.itemActions} />
            </div>
          </ListRow>
        ))}
      </PageContainer>
    </>
  );
};
