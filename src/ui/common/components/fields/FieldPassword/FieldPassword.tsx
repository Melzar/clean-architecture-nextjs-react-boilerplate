import { CSSProperties } from 'react';

import { Field } from 'ui/common/components/fields/Field/Field';

type Props = {
  name: string;
  onChange?: () => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  required?: boolean;
  testId?: string;
};
export const FieldPassword = ({
  placeholder,
  style,
  className,
  required,
  onChange,
  name,
  testId,
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
      testId={testId}
    />
  );
};
