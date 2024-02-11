import React from 'react';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';

import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { WidgetHeading } from 'ui/common/components/layout/Widget/WidgetHeading/WidgetHeading';
import { PackagesList } from 'ui/Packages/Admin/components/PackagesList/PackagesList';
import { PackagesWidgets } from 'ui/Packages/Admin/components/PackagesWidgets/PackagesWidgets';
import {
  LATEST_PACKAGES_TEXT_SECTION_HEADER,
  PACKAGES_TEXT_HEADER,
} from 'ui/Packages/Admin/packages.dictionary';

export const PackagesView = async () => (
  <>
    <PageHeader testId="packagesScreen">
      <PageHeading>{PACKAGES_TEXT_HEADER}</PageHeading>
      <WidgetHeading>
        <PackagesWidgets />
      </WidgetHeading>
    </PageHeader>
    <PageContainer>
      <PageSubHeader>
        <SectionHeader>{LATEST_PACKAGES_TEXT_SECTION_HEADER}</SectionHeader>
      </PageSubHeader>
      <PackagesList />
    </PageContainer>
  </>
);
