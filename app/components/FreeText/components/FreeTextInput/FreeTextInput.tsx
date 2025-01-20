'use client';
import styles from './FreeTextInput.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const FreeTextInput: React.FC<TextInputProps> = ({ onAddText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddText(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles.inputContainer}>
      <Image
        src={'/svg/search.svg'}
        alt="search"
        className={styles.searchIcon}
        width={20}
        height={20}
      />
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Search "
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default FreeTextInput;
