import React from 'react';

import { TextRegular } from 'ui/common/components/typography/TextRegular/TextRegular';

import styles from 'ui/common/components/typography/WidgetText/widgetText.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const WidgetText = ({ children, className = '' }: Props) => (
  <TextRegular className={`${styles.widgetText} ${className}`}>
    {children}
  </TextRegular>
);
