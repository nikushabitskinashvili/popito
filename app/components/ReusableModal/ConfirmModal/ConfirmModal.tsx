import styles from './ConfirmModal.module.scss';
import { ConfirmModalProps } from '@/app/ts/interfaces';
import ReusableModal from '@/app/components/ReusableModal/ReusableModal';
import Button from '../../Button/Button';

export default function ConfirmModal(props: ConfirmModalProps) {
  return (
    <ReusableModal
      h2={'Delete “Animation” List ?'}
      size={'confirm'}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <div className={styles.section}>
          <p className={styles.secondaryText}>
            Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet
            consectetur.{' '}
          </p>
        <div className={styles.buttons}>
          <Button title={'delete'} name={'Delete'} action={props.onDelete} />
          <Button title={'cancel'} name={'Cancel'} action={props.onClose} />
        </div>
      </div>
    </ReusableModal>
  );
}
