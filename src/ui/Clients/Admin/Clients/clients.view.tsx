import React from 'react';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { ClientsList } from 'ui/Clients/Admin/Clients/components/ClientsList/ClientsList';

export const ClientsView = () => (
  <>
    <PageHeader>
      <PageHeading>Clients</PageHeading>
    </PageHeader>
    <PageContainer>
      <PageSubHeader>
        <SectionHeader>Recent clients</SectionHeader>
      </PageSubHeader>
      <ClientsList />
    </PageContainer>
  </>
);
