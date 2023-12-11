'use client';

import React from 'react';

import { RxDotsVertical } from 'react-icons/rx';

import Link from 'next/link';

import styles from 'ui/Clients/Admin/Clients/clients.module.scss';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { useClients } from 'ui/Clients/Admin/Clients/clients.hooks';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { APP_ADMIN_ROUTES } from 'ui/common/navigation/routes';

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
          <Link
            href={APP_ADMIN_ROUTES.CLIENT(client.id)}
            key={client.id}
            className={styles.row}
          >
            <ListRow key={client.id}>
              <div className={styles.rowId}>{client.id}</div>
              <div className={styles.rowName}>
                {client.firstName} {client.lastName}
              </div>
              <div className={styles.rowEmail}>{client.email}</div>
              <div>
                <RxDotsVertical className={styles.itemActions} />
              </div>
            </ListRow>
          </Link>
        ))}
      </PageContainer>
    </>
  );
};
