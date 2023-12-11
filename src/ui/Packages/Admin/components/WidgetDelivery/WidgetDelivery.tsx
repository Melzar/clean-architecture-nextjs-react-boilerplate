import React from 'react';

import styles from 'ui/Packages/Admin/components/WidgetDelivery/widgetDelivery.module.scss';
import { Widget } from 'ui/common/components/layout/Widget/Widget';

type Props = { children?: React.ReactNode };

export const WidgetDelivery = ({ children }: Props) => (
  <Widget className={styles.widgetDelivery}>{children}</Widget>
);
