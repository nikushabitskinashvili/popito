'use client';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { useModal } from './hooks/useModal';
import styles from './page.module.css';
// import ReusableModal from '@/app/components/ReusableModal/ReusableModal';
import Button from '@/app/components/Button/Button';
import React, { useState } from 'react';
// import InputModal from '@/app/components/ReusableModal/inputModal/InputModal';
import Inputs from '@/app/components/Inputs/Inputs';
// import SelectModal from '@/app/components/ReusableModal/SelectModal/SelectModal';
import ConfirmModal from '@/app/components/ReusableModal/ConfirmModal/ConfirmModal';


export default function Home() {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div className={styles.page}>
      <Button title='askMe' action={openModal} name='openModal'/>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
