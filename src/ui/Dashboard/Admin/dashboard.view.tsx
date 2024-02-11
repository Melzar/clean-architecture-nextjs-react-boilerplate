import React from 'react';

import { TiWarningOutline } from 'react-icons/ti';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';

import { getPackageStatusIcon } from 'ui/Packages/Admin/packages.partials';
import { useDashboard } from 'ui/Dashboard/Admin/dashboard.hooks';
import { DashboardMessage } from 'ui/Dashboard/Admin/components/DashboardMessage/DashboardMessage';

import styles from 'ui/Dashboard/Admin/dashboard.module.scss';
import { latoBold } from 'ui/common/assets/fonts/fonts';
import { pluralizePackages } from 'ui/Dashboard/Admin/dashboard.helpers';
import { WidgetNeutral } from 'ui/common/components/layout/Widget/WidgetNeutral/WidgetNeutral';
import { WidgetHeading } from 'ui/common/components/layout/Widget/WidgetHeading/WidgetHeading';
import { ContainerHeader } from 'ui/common/components/typography/ContainerHeader/ContainerHeader';
import { WidgetTransparent } from 'ui/common/components/layout/Widget/WidgetTransparent/WidgetTransparent';
import { WidgetHeader } from 'ui/common/components/typography/WidgetHeader/WidgetHeader';
import { WidgetText } from 'ui/common/components/typography/WidgetText/WidgetText';
import {
  DASHBOARD_TEXT_HEADER,
  DELIVERED_TODAY_WIDGET_TEXT,
  IN_TRANSIT_TODAY_WIDGET_TEXT,
  NEW_TODAY_WIDGET_TEXT,
  RECENT_NEW_PACKAGES_HEADER_TEXT,
  RECENT_PACKAGES_DELIVERED_HEADER_TEXT,
  RECENT_PACKAGES_IN_TRANSIT_HEADER_TEXT,
  REQUIRES_ATTENTION_TEXT,
} from 'ui/Dashboard/Admin/dashboard.dictionary';

export const DashboardView = async () => {
  const {
    recentPackages,
    packagesRequiresAttention,
    deliveredPackages,
    packagesInTransit,
  } = await useDashboard();

  return (
    <PageHeader testId="dashboardScreen">
      <PageHeading className={styles.pageHeadingDashboard}>
        {DASHBOARD_TEXT_HEADER}
      </PageHeading>
      <WidgetHeading
        className={`${styles.widgetHeadingDashboard} ${styles.widgetHeadingAttention}`}
      >
        {packagesRequiresAttention > 0 && (
          <DashboardMessage testId="attention-message">
            <TiWarningOutline
              className={`${styles.warningMessageIcon} ${styles.warningStatus}`}
            />
            <span className={`${latoBold.className} ${styles.warningNumber}`}>
              {packagesRequiresAttention}
            </span>
            {pluralizePackages(packagesRequiresAttention)}{' '}
            {REQUIRES_ATTENTION_TEXT}
          </DashboardMessage>
        )}
      </WidgetHeading>
      <WidgetHeading className={styles.widgetHeadingDashboard}>
        <WidgetTransparent
          className={`${styles.widgetDashboard} ${styles.widgetTransparentDashboard}`}
        >
          <WidgetHeader testId="new-packages-number">
            {recentPackages.length}
          </WidgetHeader>
          <WidgetText>{NEW_TODAY_WIDGET_TEXT}</WidgetText>
        </WidgetTransparent>
        <WidgetTransparent
          className={`${styles.widgetDashboard} ${styles.widgetTransparentDashboard}`}
        >
          <WidgetHeader testId="in-transit-packages-number">
            {packagesInTransit.length}
          </WidgetHeader>
          <WidgetText>{IN_TRANSIT_TODAY_WIDGET_TEXT}</WidgetText>
        </WidgetTransparent>
        <WidgetTransparent
          className={`${styles.widgetDashboard} ${styles.widgetTransparentDashboard}`}
        >
          <WidgetHeader testId="delivered-packages-number">
            {deliveredPackages.length}
          </WidgetHeader>
          <WidgetText>{DELIVERED_TODAY_WIDGET_TEXT}</WidgetText>
        </WidgetTransparent>
      </WidgetHeading>

      <WidgetHeading className={styles.widgetHeadingDashboard}>
        <WidgetNeutral className={styles.widgetDashboard}>
          <ContainerHeader>{RECENT_NEW_PACKAGES_HEADER_TEXT}</ContainerHeader>
          {recentPackages.map((pack, index) => (
            <ListRow
              key={pack.id}
              testId={`new-package-${index}`}
              className={styles.widgetRow}
            >
              <div>{pack.name}</div>
              <div className={styles.rowStatus}>
                {getPackageStatusIcon(pack.status)}
              </div>
            </ListRow>
          ))}
        </WidgetNeutral>
        <WidgetNeutral className={styles.widgetDashboard}>
          <ContainerHeader>
            {RECENT_PACKAGES_IN_TRANSIT_HEADER_TEXT}
          </ContainerHeader>
          {packagesInTransit.map((pack, index) => (
            <ListRow
              key={pack.id}
              testId={`in-transit-package-${index}`}
              className={styles.widgetRow}
            >
              <div>{pack.name}</div>
              <div className={styles.rowStatus}>
                {getPackageStatusIcon(pack.status)}
              </div>
            </ListRow>
          ))}
        </WidgetNeutral>
        <WidgetNeutral className={styles.widgetDashboard}>
          <ContainerHeader>
            {RECENT_PACKAGES_DELIVERED_HEADER_TEXT}
          </ContainerHeader>
          {deliveredPackages.map((pack, index) => (
            <ListRow
              key={pack.id}
              testId={`delivered-package-${index}`}
              className={styles.widgetRow}
            >
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
