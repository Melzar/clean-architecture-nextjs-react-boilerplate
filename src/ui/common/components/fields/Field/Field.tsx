import { CSSProperties, HTMLInputTypeAttribute } from 'react';

import styles from 'ui/common/components/fields/Field/field.module.scss';

type Props = {
  name: string;
  onChange?: () => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  required?: boolean;
  value?: string;
  testId?: string;
};
export const Field = ({
  type,
  placeholder,
  style,
  className = '',
  required,
  value,
  onChange,
  name,
  testId,
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.field} ${className}`}
      style={style}
      required={required}
      onChange={onChange}
      value={value}
      name={name}
      data-testid={testId}
    />
  );
};
