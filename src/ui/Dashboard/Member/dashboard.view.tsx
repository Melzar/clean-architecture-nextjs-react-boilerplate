'use client';

import React from 'react';

import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';

export const DashboardView = () => {
  return (
    <>
      <PageHeader>
        <PageHeading>Dashboard</PageHeading>
      </PageHeader>
      <PageContainer>
        <PageSubHeader>
          <SectionHeader>Dashboard content</SectionHeader>
        </PageSubHeader>
      </PageContainer>
    </>
  );
};
