'use client';

import React from 'react';
import styles from './Button.module.scss';

export default function Button({ openModal }: ButtonProps) {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    openModal();
  };

  return (
    <button className={styles.container} onClick={handleButtonClick}>
      Ask Me Anything
    </button>
  );
}
