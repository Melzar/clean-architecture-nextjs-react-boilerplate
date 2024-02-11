import React from 'react';

import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { WidgetHeading } from 'ui/common/components/layout/Widget/WidgetHeading/WidgetHeading';
import { ClientPageHeading } from 'ui/Clients/Admin/Client/components/ClientPageHeading/ClientPageHeading';
import { ClientPackagesList } from 'ui/Clients/Admin/Client/components/ClientPackagesList/ClientPackagesList';
import { ClientWidgets } from 'ui/Clients/Admin/Client/components/ClientWidgets/ClientWidgets';
import { CLIENT_SECTION_HEADER_TEXT } from 'ui/Clients/Admin/Client/client.dictionary';

type Props = {
  clientId: string;
};
export const ClientView = ({ clientId }: Props) => (
  <>
    <PageHeader testId="clientDetailsScreen">
      <ClientPageHeading clientId={clientId} />
      <WidgetHeading>
        <ClientWidgets clientId={clientId} />
      </WidgetHeading>
    </PageHeader>
    <PageContainer>
      <PageSubHeader>
        <SectionHeader>{CLIENT_SECTION_HEADER_TEXT}</SectionHeader>
      </PageSubHeader>
      <ClientPackagesList />
    </PageContainer>
  </>
);
