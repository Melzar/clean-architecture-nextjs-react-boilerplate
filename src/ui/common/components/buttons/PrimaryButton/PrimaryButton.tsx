import React from 'react';

import styles from 'ui/common/components/buttons/PrimaryButton/primaryButton.module.scss';
import { Button } from 'ui/common/components/buttons/Button/Button';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
};
export const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  className,
}: Props) => {
  return (
    <Button
      className={`${styles.primaryButton} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
