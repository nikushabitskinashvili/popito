'use client';
import styles from './page.module.css';
import Button from '@/app/components/Button/Button';
import React, { useState } from 'react';
import Inputs from '@/app/components/Inputs/Inputs';
import ConfirmModal from '@/app/components/ReusableModal/ConfirmModal/ConfirmModal';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const OpenModal = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div className={styles.page}>
      <Button title={'next'} action={OpenModal} />
      {/*<InputModal onSubmit={OpenModal} isModalOpen={OpenModal} isOpen={isOpen} />*/}
      {/*<SelectModal onSubmit={OpenModal} isModalOpen={OpenModal} isOpen={isOpen} />*/}
      <ConfirmModal onClose={OpenModal} onDelete={OpenModal} isOpen={isOpen}/>
      <div className={styles.inputs}>
        <Inputs placeholder={'Search'} size={'small'} />
        <Inputs placeholder={'List name'} />
        <Inputs placeholder={'Search'} size={'medium'} />
        <Inputs placeholder={'Search'} size={'large'} />
      </div>
    </div>
  );


}
