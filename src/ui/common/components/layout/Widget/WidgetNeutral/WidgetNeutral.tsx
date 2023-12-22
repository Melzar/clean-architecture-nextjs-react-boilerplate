import { ReactNode } from 'react';

import styles from 'ui/common/components/layout/Widget/WidgetNeutral/widgetNeutral.module.scss';

type Props = {
  children?: ReactNode;
  className?: string;
};

export const WidgetNeutral = ({ children, className = '' }: Props) => (
  <div className={`${styles.widgetNeutral} ${className}`}>{children}</div>
);
