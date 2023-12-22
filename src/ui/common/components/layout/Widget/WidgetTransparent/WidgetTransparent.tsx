import { ReactNode } from 'react';

import styles from 'ui/common/components/layout/Widget/WidgetTransparent/widgetTransparent.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const WidgetTransparent = ({ children, className = '' }: Props) => (
  <div className={`${styles.widgetTransparent} ${className}`}>{children}</div>
);
