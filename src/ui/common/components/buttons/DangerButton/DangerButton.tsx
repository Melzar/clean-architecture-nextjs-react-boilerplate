import React from 'react';

import { Button } from 'ui/common/components/buttons/Button/Button';

import styles from 'ui/common/components/buttons/DangerButton/dangerButton.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
};

export const DangerButton = ({
  children,
  onClick,
  type = 'button',
  className,
}: Props) => (
  <Button
    className={`${styles.dangerButton} ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </Button>
);
