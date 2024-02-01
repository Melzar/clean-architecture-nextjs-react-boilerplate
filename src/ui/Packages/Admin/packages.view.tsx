import React from 'react';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';

import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { WidgetHeading } from 'ui/common/components/layout/Widget/WidgetHeading/WidgetHeading';
import { PackagesList } from 'ui/Packages/Admin/components/PackagesList/PackagesList';
import { PackagesWidgets } from 'ui/Packages/Admin/components/PackagesWidgets/PackagesWidgets';

export const PackagesView = async () => (
  <>
    <PageHeader testId="packagesScreen">
      <PageHeading>Packages</PageHeading>
      <WidgetHeading>
        <PackagesWidgets />
      </WidgetHeading>
    </PageHeader>
    <PageContainer>
      <PageSubHeader>
        <SectionHeader>Latest packages</SectionHeader>
      </PageSubHeader>
      <PackagesList />
    </PageContainer>
  </>
);
