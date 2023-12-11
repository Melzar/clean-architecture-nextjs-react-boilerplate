import React from 'react';

import styles from 'ui/common/components/typography/TextRegular/textRegular.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TextRegular = ({ children, className = '' }: Props) => (
  <p className={`${styles.textRegular} ${className}`}>{children}</p>
);
