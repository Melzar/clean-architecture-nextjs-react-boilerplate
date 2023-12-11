import React from 'react';

import styles from 'ui/Packages/Admin/components/WidgetAttention/widgetAttention.module.scss';
import { Widget } from 'ui/common/components/layout/Widget/Widget';

type Props = { children?: React.ReactNode };

export const WidgetAttention = ({ children }: Props) => (
  <Widget className={styles.widgetAttention}>{children}</Widget>
);
