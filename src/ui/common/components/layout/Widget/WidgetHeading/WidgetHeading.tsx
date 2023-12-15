import { ReactNode } from 'react';

import styles from 'ui/common/components/layout/Widget/WidgetHeading/widgetHeading.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const WidgetHeading = ({ children, className = '' }: Props) => (
  <div className={`${styles.widgetHeading} ${className}`}>{children}</div>
);
