'use client';

import React from 'react';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';

export const DashboardView = () => {
  return (
    <>
      <PageHeader>
        <PageHeading>Dashboard</PageHeading>
      </PageHeader>
      <PageContainer>
        <div>Dashboard content</div>
      </PageContainer>
    </>
  );
};
