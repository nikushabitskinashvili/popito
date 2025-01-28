'use client';

import React from 'react';
import styles from './answer.module.scss';
import { AnswerProps } from '@/app/ts/interfaces';

export default function Answer({
  value,
  label,
  selectedAnswer,
  onChange,
}: AnswerProps) {
  return (
    <label className={styles.label}>
      <input
        type="radio"
        value={value}
        checked={selectedAnswer === value}
        onChange={() => onChange(value)}
      />
      <span>{label}</span>
    </label>
  );
}
