import styles from './Inputs.module.scss';
import { InputProps } from '@/app/ts/interfaces';
import Image from 'next/image';
import { useRef } from 'react';

export default function Inputs(props: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const classes = [styles.container];

  if (props.size === 'small') classes.push(styles.small);
  if (props.size === 'medium') classes.push(styles.medium);
  if (props.size === 'large') classes.push(styles.large);
  if (props.placeholder === 'List name') classes.push(styles.listName);

  return (
    <div className={classes.join(' ')}>
      {props.placeholder != 'List name' && (
        <Image
          className={styles.search}
          src={'svg/search-lg.svg'}
          alt={'search'}
          width={20}
          height={20}
          onClick={handleImageClick}
        />
      )}
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={props.placeholder}
        type={'text'}
      />
    </div>
  );
}
