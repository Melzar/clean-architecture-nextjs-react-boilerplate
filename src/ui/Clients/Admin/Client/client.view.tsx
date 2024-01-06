import React from 'react';

import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { WidgetHeading } from 'ui/common/components/layout/Widget/WidgetHeading/WidgetHeading';
import { ClientPageHeading } from 'ui/Clients/Admin/Client/components/ClientPageHeading/ClientPageHeading';
import { ClientPackagesList } from 'ui/Clients/Admin/Client/components/ClientPackagesList/ClientPackagesList';
import { ClientWidgets } from 'ui/Clients/Admin/Client/components/ClientWidgets/ClientWidgets';

type Props = {
  clientId: string;
};
export const ClientView = ({ clientId }: Props) => (
  <>
    <PageHeader>
      <ClientPageHeading clientId={clientId} />
      <WidgetHeading>
        <ClientWidgets clientId={clientId} />
      </WidgetHeading>
    </PageHeader>
    <PageContainer>
      <PageSubHeader>
        <SectionHeader>Recent client packages</SectionHeader>
      </PageSubHeader>
      <ClientPackagesList />
    </PageContainer>
  </>
);
