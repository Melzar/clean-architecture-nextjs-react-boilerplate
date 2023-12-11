import React from 'react';

import styles from 'ui/Packages/Admin/components/WidgetNew/widgetNew.module.scss';
import { Widget } from 'ui/common/components/layout/Widget/Widget';

type Props = { children?: React.ReactNode };

export const WidgetNew = ({ children }: Props) => (
  <Widget className={styles.widgetNew}>{children}</Widget>
);
