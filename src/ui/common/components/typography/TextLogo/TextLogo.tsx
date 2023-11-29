import styles from 'ui/common/components/typography/TextLogo/textLogo.module.scss';

import { pacifico } from 'ui/common/assets/fonts/fonts';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TextLogo = ({ children, className }: Props) => {
  return (
    <h1 className={`${styles.textLogo} ${pacifico.className} ${className}`}>
      {children}
    </h1>
  );
};
