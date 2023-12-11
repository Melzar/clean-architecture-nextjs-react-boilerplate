import {
  LuPackageCheck,
  LuPackageX,
  LuPackageSearch,
  LuPackagePlus,
} from 'react-icons/lu';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { TiWarningOutline } from 'react-icons/ti';
import { TbQuestionMark } from 'react-icons/tb';

import styles from 'ui/Packages/Admin/packages.module.scss';

export const PackageStatus = {
  processing: (
    <LuPackageSearch
      className={`${styles.rowStatusIcon} ${styles.rowStatusIconProcessing}`}
    />
  ),
  shipped: (
    <LuPackagePlus
      className={`${styles.rowStatusIcon} ${styles.rowStatusIconShipped}`}
    />
  ),
  in_transit: (
    <LiaShippingFastSolid
      className={`${styles.rowStatusIcon} ${styles.rowStatusIconInTransit}`}
    />
  ),
  delivered: (
    <LuPackageCheck
      className={`${styles.rowStatusIcon} ${styles.rowStatusIconDelivered}`}
    />
  ),
  attention_needed: (
    <TiWarningOutline
      className={`${styles.rowStatusIcon} ${styles.rowStatusIconAttention}`}
    />
  ),
  cancelled: (
    <LuPackageX
      className={`${styles.rowStatusIcon} ${styles.rowStatusIconCancelled}`}
    />
  ),
};

export const getPackageStatusIcon = (status: string) => {
  if (PackageStatus[status as keyof typeof PackageStatus] === undefined) {
    return <TbQuestionMark />;
  }

  return PackageStatus[status as keyof typeof PackageStatus];
};
