'use client';

import React, { useState } from 'react';
import styles from './modal.module.scss';
import { askModalProps } from '@/app/ts/interfaces';
import Answer from '../Answer/answer';
import Button from '../Button/Button';
import XButton from '../Button/XButton/XButton';

export default function Modal({ isModalOpen, closeModal }: askModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  if (!isModalOpen) return null;

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const answers = [
    { value: 'option1', label: 'Lorem ipsum dolor sit.' },
    { value: 'option2', label: 'Lorem ipsum dolor sit.' },
    { value: 'option3', label: 'Lorem ipsum dolor sit.' },
    { value: 'option4', label: 'Lorem ipsum dolor sit.' },
  ];

  return (
    <div className={styles.wrapper} onClick={closeModal}>
      <div className={styles.container} onClick={handleContainerClick}>
        <div className={styles.header}>
          <span className={styles.heading}>Lets choose a movie together for today</span>
          <XButton onClick={closeModal}/>
        </div>
        <div className={styles.content}>
          <span className={styles.question}>
            “Who are you planning to watch the movie with today?”
          </span>
          <div className={styles.innerWrapper}>
            <div className={styles.answers}>
              {answers.map((answer) => (
                <Answer
                  key={answer.value}
                  value={answer.value}
                  label={answer.label}
                  selectedAnswer={selectedAnswer}
                  onChange={(value) => setSelectedAnswer(value)}
                />
              ))}
            </div>

            <Button title='next' action={closeModal} name='next' />
          </div>
        </div>
        <Button title='skip' action={closeModal} name='skip'/>
      </div>
    </div>
  );
}
