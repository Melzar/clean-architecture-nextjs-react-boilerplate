import React from 'react';

import styles from 'ui/common/components/toggles/Switch/switch.module.scss';

type Props = {
  name: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  children?: React.ReactNode;
};
export const Switch = ({
  id,
  name,
  className = '',
  onChange,
  children,
}: Props) => {
  return (
    <div className={`${styles.switch} ${className}`}>
      <input type="checkbox" name={name} id={id} onChange={onChange} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
