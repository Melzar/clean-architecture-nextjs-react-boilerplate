import React from 'react';

import styles from 'ui/common/components/typography/WidgetHeader/widgetHeader.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  testId?: string;
};

export const WidgetHeader = ({ children, className = '', testId }: Props) => (
  <h3 className={`${styles.widgetHeader} ${className}`} data-testid={testId}>
    {children}
  </h3>
);
