import React from 'react';

import styles from 'ui/common/components/buttons/Button/button.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
  testId?: string;
};
export const Button = ({
  children,
  onClick,
  type = 'button',
  className,
  testId,
}: Props) => (
  <button
    className={`${styles.button} ${className}`}
    type={type}
    onClick={onClick}
    data-testid={testId}
  >
    {children}
  </button>
);
