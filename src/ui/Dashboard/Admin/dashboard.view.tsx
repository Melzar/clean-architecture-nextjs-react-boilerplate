'use client';

import React from 'react';

import { TiWarningOutline } from 'react-icons/ti';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';

import { getPackageStatusIcon } from 'ui/Packages/Admin/packages.partials';
import { useDashboard } from 'ui/Dashboard/Admin/dashboard.hooks';
import { DashboardMessage } from 'ui/Dashboard/Admin/component/DashboardMessage/DashboardMessage';

import styles from 'ui/Dashboard/Admin/dashboard.module.scss';
import { latoBold } from 'ui/common/assets/fonts/fonts';
import { pluralizePackages } from 'ui/Dashboard/Admin/dashboard.helpers';
import { WidgetNeutral } from 'ui/common/components/layout/Widget/WidgetNeutral/WidgetNeutral';
import { WidgetHeading } from 'ui/common/components/layout/Widget/WidgetHeading/WidgetHeading';
import { ContainerHeader } from 'ui/common/components/typography/ContainerHeader/ContainerHeader';
import { WidgetTransparent } from 'ui/common/components/layout/Widget/WidgetTransparent/WidgetTransparent';
import { WidgetHeader } from 'ui/common/components/typography/WidgetHeader/WidgetHeader';
import { WidgetText } from 'ui/common/components/typography/WidgetText/WidgetText';

export const DashboardView = () => {
  const {
    recentPackages,
    packagesRequiresAttention,
    deliveredPackages,
    packagesInTransit,
  } = useDashboard();

  return (
    <PageHeader>
      <PageHeading className={styles.pageHeadingDashboard}>
        Dashboard
      </PageHeading>
      <WidgetHeading
        className={`${styles.widgetHeadingDashboard} ${styles.widgetHeadingAttention}`}
      >
        {packagesRequiresAttention > 0 && (
          <DashboardMessage>
            <TiWarningOutline
              className={`${styles.warningMessageIcon} ${styles.warningStatus}`}
            />
            <span className={`${latoBold.className} ${styles.warningNumber}`}>
              {packagesRequiresAttention}
            </span>
            {pluralizePackages(packagesRequiresAttention)} requires your
            attention!
          </DashboardMessage>
        )}
      </WidgetHeading>
      <WidgetHeading className={styles.widgetHeadingDashboard}>
        <WidgetTransparent
          className={`${styles.widgetDashboard} ${styles.widgetTransparentDashboard}`}
        >
          <WidgetHeader>{recentPackages.length}</WidgetHeader>
          <WidgetText>New Today</WidgetText>
        </WidgetTransparent>
        <WidgetTransparent
          className={`${styles.widgetDashboard} ${styles.widgetTransparentDashboard}`}
        >
          <WidgetHeader>{packagesInTransit.length}</WidgetHeader>
          <WidgetText>In Transit Today</WidgetText>
        </WidgetTransparent>
        <WidgetTransparent
          className={`${styles.widgetDashboard} ${styles.widgetTransparentDashboard}`}
        >
          <WidgetHeader>{deliveredPackages.length}</WidgetHeader>
          <WidgetText>Delivered Today</WidgetText>
        </WidgetTransparent>
      </WidgetHeading>

      <WidgetHeading className={styles.widgetHeadingDashboard}>
        <WidgetNeutral className={styles.widgetDashboard}>
          <ContainerHeader>Recent New Packages</ContainerHeader>
          {recentPackages.map((pack) => (
            <ListRow key={pack.id} className={styles.widgetRow}>
              <div>{pack.name}</div>
              <div className={styles.rowStatus}>
                {getPackageStatusIcon(pack.status)}
              </div>
            </ListRow>
          ))}
        </WidgetNeutral>
        <WidgetNeutral className={styles.widgetDashboard}>
          <ContainerHeader>Recent Packages In Transit</ContainerHeader>
          {packagesInTransit.map((pack) => (
            <ListRow key={pack.id} className={styles.widgetRow}>
              <div>{pack.name}</div>
              <div className={styles.rowStatus}>
                {getPackageStatusIcon(pack.status)}
              </div>
            </ListRow>
          ))}
        </WidgetNeutral>
        <WidgetNeutral className={styles.widgetDashboard}>
          <ContainerHeader>Recent Packages Delivered</ContainerHeader>
          {deliveredPackages.map((pack) => (
            <ListRow key={pack.id} className={styles.widgetRow}>
              <div>{pack.name}</div>
              <div className={styles.rowStatus}>
                {getPackageStatusIcon(pack.status)}
              </div>
            </ListRow>
          ))}
        </WidgetNeutral>
      </WidgetHeading>
    </PageHeader>
  );
};
