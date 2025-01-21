'use client';
import React, { useState } from 'react';
import styles from './modal.module.scss';
import Image from 'next/image';

export default function Modal({ isModalOpen, closeModal }: ModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  if (!isModalOpen) return null;

  const handleRadioChange = (value: string) => {
    setSelectedAnswer((prev) => (prev === value ? null : value));
  };

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.wrapper} onClick={closeModal}>
      <div className={styles.container} onClick={handleContainerClick}>
        <div className={styles.header}>
          <span className={styles.heading}>
            Let&apos;s choose a movie together for today
          </span>

          <div className={styles.x} onClick={closeModal}>
            <Image src="/svg/close.svg" alt="Close" width={24} height={24} />
          </div>
        </div>
        <div className={styles.content}>
          <span className={styles.question}>
            &ldquo;Who are you planning to watch the movie with today?&rdquo;
          </span>
          <div className={styles.innerWrapper}>
            <div className={styles.answers}>
              <label className={styles.label}>
                <input
                  type="radio"
                  checked={selectedAnswer === 'option1'}
                  onChange={() => handleRadioChange('option1')}
                />
                <span>Lorem ipsum dolor sit.</span>
              </label>
              <label className={styles.label}>
                <input
                  type="radio"
                  checked={selectedAnswer === 'option2'}
                  onChange={() => handleRadioChange('option2')}
                />
                <span>Lorem ipsum dolor sit.</span>
              </label>
              <label className={styles.label}>
                <input
                  type="radio"
                  checked={selectedAnswer === 'option3'}
                  onChange={() => handleRadioChange('option3')}
                />
                <span>Lorem ipsum dolor sit.</span>
              </label>
              <label className={styles.label}>
                <input
                  type="radio"
                  checked={selectedAnswer === 'option4'}
                  onChange={() => handleRadioChange('option4')}
                />
                <span>Lorem ipsum dolor sit.</span>
              </label>
            </div>
            <button className={styles.nextButton}>
              Next
            </button>
          </div>
        </div>
        <span className={styles.skip}>skip</span>
      </div>
    </div>
  );
}
