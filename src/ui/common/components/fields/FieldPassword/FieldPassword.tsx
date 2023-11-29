import { CSSProperties } from 'react';

import { Field } from 'ui/common/components/fields/Field/Field';

type Props = {
  name: string;
  onChange?: () => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  required?: boolean;
};
export const FieldPassword = ({
  placeholder,
  style,
  className,
  required,
  onChange,
  name,
}: Props) => {
  return (
    <Field
      type="password"
      placeholder={placeholder}
      className={className}
      style={style}
      required={required}
      onChange={onChange}
      name={name}
    />
  );
};
