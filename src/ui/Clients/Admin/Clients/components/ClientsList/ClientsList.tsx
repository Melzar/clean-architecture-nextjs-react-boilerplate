import Link from 'next/link';

import { RxDotsVertical } from 'react-icons/rx';

import React from 'react';

import { APP_ADMIN_ROUTES } from 'ui/common/navigation/routes';
import styles from 'ui/Clients/Admin/Clients/components/ClientsList/clientsList.module.scss';
import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';

import { useClientsList } from 'ui/Clients/Admin/Clients/components/ClientsList/clientsList.hooks';

export const ClientsList = async () => {
  const { clients } = await useClientsList();

  return (
    <>
      {clients.map((client, index) => (
        <Link
          href={APP_ADMIN_ROUTES.CLIENT(client.id)}
          key={client.id}
          className={styles.row}
        >
          <ListRow key={client.id} testId={`client-row-${index}`}>
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
    </>
  );
};
