'use client';
import { useState } from 'react';
import styles from './FreeText.module.scss';
import TextList from './components/TextList/TextList';
import FreeTextInput from './components/FreeTextInput/FreeTextInput';
import Button from '../Button/Button';
import { useModal } from '@/app/hooks/useModal';
import Modal from '../Modal/Modal';

const FreeText = () => {
  const [text, setText] = useState<string[]>([]);
  const { isModalOpen, openModal, closeModal } = useModal();

  const AddText = (newText: string) => {
    if (newText.trim()) {
      setText([...text, newText]);
    }
  };

  const handleDelete = (index: number) => {
    const updatedText = text.filter((_, i) => i !== index);
    setText(updatedText);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <FreeTextInput onAddText={AddText} />
        <Button openModal={openModal} />
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>

      {text.length > 0 && <TextList text={text} onDelete={handleDelete} />}
    </div>
  );
};

export default FreeText;
