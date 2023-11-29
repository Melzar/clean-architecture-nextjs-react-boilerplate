import { CSSProperties, ReactNode } from 'react';

import styles from './containerBox.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ContainerBox = ({ children, style, className }: Props) => (
  <div className={`mx-auto ${className} ${styles.container}`} style={style}>
    {children}
  </div>
);
