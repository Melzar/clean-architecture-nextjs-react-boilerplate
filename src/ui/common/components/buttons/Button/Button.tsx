import React from 'react';

import styles from 'ui/common/components/buttons/Button/button.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
};
export const Button = ({
  children,
  onClick,
  type = 'button',
  className,
}: Props) => (
  <button
    className={`${styles.button} ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);
