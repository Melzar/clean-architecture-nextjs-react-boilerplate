'use client';

import React from 'react';

import { RxDotsVertical } from 'react-icons/rx';

import { useClient } from 'ui/Clients/Admin/Client/client.hooks';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';

import styles from 'ui/Clients/Admin/Client/client.module.scss';
import { getPackageStatusIcon } from 'ui/Packages/Admin/packages.partials';

export const ClientView = () => {
  const { packages, client } = useClient();

  return (
    <>
      <PageHeader>
        <PageHeading>
          {client?.firstName} {client?.lastName}
        </PageHeading>
      </PageHeader>
      <PageContainer>
        <PageSubHeader>
          <SectionHeader>Recent client packages</SectionHeader>
        </PageSubHeader>
        {packages.map((pack) => (
          <ListRow key={pack.id}>
            <div className={styles.rowId}>{pack.id}</div>
            <div className={styles.rowName}>{pack.name}</div>
            <div className={styles.rowStatus}>
              {getPackageStatusIcon(pack.status)}
            </div>
            <div>
              <RxDotsVertical className={styles.itemActions} />
            </div>
          </ListRow>
        ))}
      </PageContainer>
    </>
  );
};
