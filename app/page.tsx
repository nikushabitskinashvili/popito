'use client';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { useModal } from './hooks/useModal';
import styles from './page.module.css';

export default function Home() {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div className={styles.page}>
      <Button title='askMe' action={openModal} name='openModal'/>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}
