import { ReactNode } from 'react';

import { nunitoRegular } from 'ui/common/assets/fonts/fonts';
import styles from 'ui/common/components/typography/ContainerHeader/containerHeader.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};
export const ContainerHeader = ({ children, className }: Props) => {
  return (
    <h3
      className={`${nunitoRegular.className} ${styles.containerHeader} ${className}`}
    >
      {children}
    </h3>
  );
};
