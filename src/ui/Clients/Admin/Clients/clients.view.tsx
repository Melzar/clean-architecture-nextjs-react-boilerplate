import React from 'react';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { ClientsList } from 'ui/Clients/Admin/Clients/components/ClientsList/ClientsList';
import {
  CLIENTS_SECTION_TEXT_HEADER,
  CLIENTS_TEXT_HEADER,
} from 'ui/Clients/Admin/Clients/clients.dictionary';

export const ClientsView = () => (
  <>
    <PageHeader testId="clientsScreen">
      <PageHeading>{CLIENTS_TEXT_HEADER}</PageHeading>
    </PageHeader>
    <PageContainer>
      <PageSubHeader>
        <SectionHeader>{CLIENTS_SECTION_TEXT_HEADER}</SectionHeader>
      </PageSubHeader>
      <ClientsList />
    </PageContainer>
  </>
);
