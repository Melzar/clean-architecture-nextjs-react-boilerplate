import React from 'react';

import { ButtonSmall } from 'ui/common/components/buttons/ButtonSmall/ButtonSmall';

import styles from 'ui/common/components/buttons/DangerButtonSmall/dangerButtonSmall.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
};

export const DangerButtonSmall = ({
  children,
  onClick,
  type = 'button',
  className,
}: Props) => (
  <ButtonSmall
    className={`${styles.dangerButtonSmall} ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </ButtonSmall>
);
