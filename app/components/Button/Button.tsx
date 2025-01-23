'use client';

import React from 'react';
import styles from './Button.module.scss';
import Image from "next/image";
import { ButtonProps } from '@/app/ts/interfaces';

// import {IconEnum} from "@/app/utils/icons";


export default function Button(props: ButtonProps) {
  const handleButtonClick = () => {
    console.log('Buttons clicked!');
    props.action();
  };

  const classes = [styles.container];

  if (props.title === 'trailer') classes.push(styles.trailer);
  if (props.title === 'delete') classes.push(styles.delete);
  if (props.title === 'cancel') classes.push(styles.cancel);
  if (props.title === 'askMe') classes.push(styles.askMe);
  if (props.title === 'newRec') classes.push(styles.newRec);
  if (props.title === 'play') classes.push(styles.play);
  if (props.title === 'done') classes.push(styles.done);
  if (props.title === 'createList') classes.push(styles.createList);
  if (props.title === 'skip') classes.push(styles.skip);
  if (props.title === 'submit') classes.push(styles.submit);
  if (props.title === 'next') classes.push(styles.next);
  if (props.title === 'number') classes.push(styles.number);
  if (props.title === 'letsCreateList') classes.push(styles.letsCreateList);
  if (props.title === 'largeDone') classes.push(styles.largeDone);
  if (props.title === 'smallPlay') classes.push(styles.smallPlay)

  return (
    <button className={classes.join(" ")} onClick={handleButtonClick}>
      {props.title === 'smallPlay' && <Image src={'svg/play.svg'} alt={'play'} width={12} height={12}/>}
      {props.title === 'letsCreateList' && <Image src={'svg/letsCreateList.svg'} alt={'plus'} width={40} height={40}/>}
      {props.name}
      {props.title === 'play' && <Image src={'svg/play.svg'} alt={'play'} width={16} height={16}/>}
    </button>
  );
}
