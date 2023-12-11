import React from 'react';

import { TextRegular } from 'ui/common/components/typography/TextRegular/TextRegular';
import styles from 'ui/common/components/typography/WidgetSubHeader/widgetSubHeader.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const WidgetSubHeader = ({ children, className = '' }: Props) => (
  <TextRegular className={`${styles.widgetSubheader} ${className}`}>
    {children}
  </TextRegular>
);
