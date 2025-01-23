import React from 'react';
import ReusableModal from '@/app/components/ReusableModal/ReusableModal';
import { InputModalProps } from '@/app/ts/interfaces';
import Inputs from '@/app/components/Inputs/Inputs';
import styles from './InputModal.module.scss'
import Button from '../../Button/Button';


const InputModal = (props: InputModalProps ) => {


  return (
      <ReusableModal size={'small'} h2={'List name'} isOpen={props.isOpen} onClose={props.isModalOpen}>
        <div className={styles.inputs}>
        <Inputs placeholder={'List name'} />
        <Button title={'createList'} name={'Create list'} action={props.onSubmit}/>
        </div>
      </ReusableModal>
  );
};

export default InputModal;
