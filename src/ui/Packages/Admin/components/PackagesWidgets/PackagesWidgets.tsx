import { LuPackageCheck, LuPackageSearch } from 'react-icons/lu';

import { LiaShippingFastSolid } from 'react-icons/lia';

import { TiWarningOutline } from 'react-icons/ti';

import React from 'react';

import { WidgetNew } from 'ui/common/components/layout/Widget/WidgetNew/WidgetNew';
import { WidgetContent } from 'ui/common/components/layout/Widget/WidgetContent/WidgetContent';
import { WidgetSubHeader } from 'ui/common/components/typography/WidgetSubHeader/WidgetSubHeader';
import { WidgetHeader } from 'ui/common/components/typography/WidgetHeader/WidgetHeader';
import styles from 'ui/Packages/Admin/packages.module.scss';
import { WidgetDelivery } from 'ui/common/components/layout/Widget/WidgetDelivery/WidgetDelivery';

import { WidgetAttention } from 'ui/common/components/layout/Widget/WidgetAttention/WidgetAttention';

import { WidgetCompleted } from 'ui/common/components/layout/Widget/WidgetCompleted/widgetCompleted';

import { usePackagesWidgets } from 'ui/Packages/Admin/components/PackagesWidgets/packagesWidgets.hooks';
import {
  ATTENTION_TEXT_HEADER,
  COMPLETED_TODAY_TEXT_HEADER,
  IN_DELIVERY_TEXT_HEADER,
  NEW_TODAY_TEXT_HEADER,
} from 'ui/Packages/Admin/components/PackagesWidgets/packagesWidgets.dictionary';

export const PackagesWidgets = async () => {
  const {
    recentPackages,
    packagesRequiresAttention,
    deliveredPackages,
    packagesInTransit,
  } = await usePackagesWidgets();

  return (
    <>
      <WidgetNew>
        <WidgetContent>
          <WidgetSubHeader>{NEW_TODAY_TEXT_HEADER}</WidgetSubHeader>
          <WidgetHeader testId="new-packages">{recentPackages}</WidgetHeader>
        </WidgetContent>
        <LuPackageSearch className={styles.widgetIcon} />
      </WidgetNew>
      <WidgetDelivery>
        <WidgetContent>
          <WidgetSubHeader>{IN_DELIVERY_TEXT_HEADER}</WidgetSubHeader>
          <WidgetHeader testId="in-delivery-packages">
            {packagesInTransit}
          </WidgetHeader>
        </WidgetContent>
        <LiaShippingFastSolid className={styles.widgetIcon} />
      </WidgetDelivery>
      <WidgetAttention>
        <WidgetContent>
          <WidgetSubHeader>{ATTENTION_TEXT_HEADER}</WidgetSubHeader>
          <WidgetHeader testId="attention-needed-packages">
            {packagesRequiresAttention}
          </WidgetHeader>
        </WidgetContent>
        <TiWarningOutline className={styles.widgetIcon} />
      </WidgetAttention>
      <WidgetCompleted>
        <WidgetContent>
          <WidgetSubHeader>{COMPLETED_TODAY_TEXT_HEADER}</WidgetSubHeader>
          <WidgetHeader testId="completed-packages">
            {deliveredPackages}
          </WidgetHeader>
        </WidgetContent>
        <LuPackageCheck className={styles.widgetIcon} />
      </WidgetCompleted>
    </>
  );
};
