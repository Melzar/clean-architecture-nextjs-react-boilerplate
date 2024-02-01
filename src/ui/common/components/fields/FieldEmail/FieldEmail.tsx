import React, { CSSProperties } from 'react';

import { Field } from 'ui/common/components/fields/Field/Field';

type Props = {
  name: string;
  onChange?: () => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  required?: boolean;
  value?: string;
  testId?: string;
};
export const FieldEmail = ({
  placeholder,
  style,
  className,
  required,
  onChange,
  value,
  name,
  testId,
}: Props) => {
  return (
    <Field
      type="email"
      placeholder={placeholder}
      className={className}
      style={style}
      required={required}
      onChange={onChange}
      value={value}
      name={name}
      testId={testId}
    />
  );
};
