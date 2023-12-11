import React from 'react';

import styles from 'ui/common/components/typography/WidgetHeader/widgetHeader.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const WidgetHeader = ({ children, className = '' }: Props) => (
  <h3 className={`${styles.widgetHeader} ${className}`}>{children}</h3>
);
