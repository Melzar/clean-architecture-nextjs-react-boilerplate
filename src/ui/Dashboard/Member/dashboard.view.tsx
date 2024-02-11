import React from 'react';

import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { DASHBOARD_TEXT_HEADER } from 'ui/Dashboard/Member/dashboard.dictionary';

export const DashboardView = () => {
  return (
    <PageHeader>
      <PageHeading>{DASHBOARD_TEXT_HEADER}</PageHeading>
    </PageHeader>
  );
};
