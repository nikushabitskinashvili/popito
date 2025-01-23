import { XButtonProps } from '@/app/ts/interfaces';
import styles from './XButton.module.scss';
import Image from 'next/image';
export default function XButton (props: XButtonProps){

  const sizeNum = props.size === 'small' ? 24 : 36;


  return (
        <button onClick={props.onClick} className={ props.size ==='small' ? styles.small : styles.large }>
          <Image src={'svg/close.svg'} alt={'x'} width={sizeNum} height={sizeNum}/>
        </button>
    )
}