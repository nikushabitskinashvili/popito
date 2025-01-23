import React from 'react';
import ReactDOM from 'react-dom';
// import "./Modal.css";
import { ModalProps } from '@/app/ts/interfaces';
// import Image from 'next/image';
import styles from './ReusableModal.module.scss';
import XButton from '../Button/XButton/XButton';


const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  const sizeClasses = [styles.container];
  const XClasses = [];

  if (props.size === 'small') sizeClasses.push(styles.small);
  if (props.size === 'medium') sizeClasses.push(styles.medium);
  if (props.size === 'large') sizeClasses.push(styles.large);
  if (props.size === 'confirm') sizeClasses.push(styles.confirmation)

  if (props.XButton) XClasses.push(styles.XButton);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={props.onClose}>
      <div className={sizeClasses.join(" ")} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.h2}>{props.h2}</h2>
          { props.size !== 'confirm' && <XButton size={'small'} onClick={props.onClose} />}
        </div>
        {props.children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
