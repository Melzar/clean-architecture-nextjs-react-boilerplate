import { LuPackageCheck, LuPackageSearch } from 'react-icons/lu';

import { LiaShippingFastSolid } from 'react-icons/lia';

import { TiWarningOutline } from 'react-icons/ti';

import React from 'react';

import { WidgetNew } from 'ui/common/components/layout/Widget/WidgetNew/WidgetNew';
import { WidgetContent } from 'ui/common/components/layout/Widget/WidgetContent/WidgetContent';
import { WidgetSubHeader } from 'ui/common/components/typography/WidgetSubHeader/WidgetSubHeader';
import { WidgetHeader } from 'ui/common/components/typography/WidgetHeader/WidgetHeader';
import styles from 'ui/Clients/Admin/Client/components/ClientPackagesList/clientPackagesList.module.scss';
import { WidgetDelivery } from 'ui/common/components/layout/Widget/WidgetDelivery/WidgetDelivery';

import { WidgetAttention } from 'ui/common/components/layout/Widget/WidgetAttention/WidgetAttention';

import { WidgetCompleted } from 'ui/common/components/layout/Widget/WidgetCompleted/widgetCompleted';
import { useClientWidgets } from 'ui/Clients/Admin/Client/components/ClientWidgets/clientWidgets.hooks';

export type Props = {
  clientId: string;
};
export const ClientWidgets = async (props: Props) => {
  const {
    packagesRequiresAttention,
    packagesInTransit,
    deliveredPackages,
    recentPackages,
  } = await useClientWidgets(props);

  return (
    <>
      <WidgetNew>
        <WidgetContent>
          <WidgetSubHeader>New today</WidgetSubHeader>
          <WidgetHeader>{recentPackages}</WidgetHeader>
        </WidgetContent>
        <LuPackageSearch className={styles.widgetIcon} />
      </WidgetNew>
      <WidgetDelivery>
        <WidgetContent>
          <WidgetSubHeader>Still in delivery</WidgetSubHeader>
          <WidgetHeader>{packagesInTransit}</WidgetHeader>
        </WidgetContent>
        <LiaShippingFastSolid className={styles.widgetIcon} />
      </WidgetDelivery>
      <WidgetAttention>
        <WidgetContent>
          <WidgetSubHeader>Attention Needed</WidgetSubHeader>
          <WidgetHeader>{packagesRequiresAttention}</WidgetHeader>
        </WidgetContent>
        <TiWarningOutline className={styles.widgetIcon} />
      </WidgetAttention>
      <WidgetCompleted>
        <WidgetContent>
          <WidgetSubHeader>Completed today</WidgetSubHeader>
          <WidgetHeader>{deliveredPackages}</WidgetHeader>
        </WidgetContent>
        <LuPackageCheck className={styles.widgetIcon} />
      </WidgetCompleted>
    </>
  );
};
