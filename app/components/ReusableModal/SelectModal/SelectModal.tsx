import { SelectModalProps } from '@/app/ts/interfaces';
import ReusableModal from '@/app/components/ReusableModal/ReusableModal';
import Inputs from '@/app/components/Inputs/Inputs';
import Button from '@/app/components/Button/Button';
import styles from './SelectModal.module.scss';

export default function SelectModal(props: SelectModalProps) {
  return (
    <ReusableModal
      h2={'Select Your Streaming Services'}
      size={'large'}
      isOpen={props.isOpen}
      onClose={props.isModalOpen}
    >
      <div className={styles.section}>
        <div className={styles.inside}>
          <Inputs placeholder={'Search'} size={'medium'}></Inputs>
          <div className={styles.selectWrapper}>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
            <div>Netflix</div>
          </div>
        </div>
        <Button title={'largeDone'} action={props.onSubmit} name={'Done'} />
      </div>
    </ReusableModal>
  );
}
