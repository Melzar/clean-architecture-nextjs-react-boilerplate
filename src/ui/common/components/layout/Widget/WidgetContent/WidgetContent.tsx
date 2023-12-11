import React from 'react';

import styles from 'ui/common/components/layout/Widget/WidgetContent/widgetConent.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const WidgetContent = ({ children, className = '' }: Props) => (
  <div className={`${styles.widgetContent} ${className}`}>{children}</div>
);
