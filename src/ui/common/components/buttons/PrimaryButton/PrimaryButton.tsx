import React from 'react';

import styles from 'ui/common/components/buttons/PrimaryButton/primaryButton.module.scss';

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
    <button
      className={`${styles.primaryButton} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
