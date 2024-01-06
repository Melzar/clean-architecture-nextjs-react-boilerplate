import React from 'react';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { useClientPageHeading } from 'ui/Clients/Admin/Client/components/ClientPageHeading/clientPageHeading.hooks';

export type Props = {
  clientId: string;
};
export const ClientPageHeading = async (props: Props) => {
  const { client } = await useClientPageHeading(props);

  return (
    <PageHeading>
      {client?.firstName} {client?.lastName}
    </PageHeading>
  );
};
