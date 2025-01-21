import styles from './TextItem.module.scss';
import Image from 'next/image';

interface TextItemProps extends TextProps {
  onDelete: () => void;
}

const TextItem: React.FC<TextItemProps> = ({ text, onDelete }) => {
  return (
    <div className={styles.container}>
      <li className={styles.containerText}>{text}</li>
      <Image
        src={'/svg/close.svg'}
        alt={'close'}
        width={15}
        height={15}
        onClick={onDelete}
        className={styles.deleteIcon}
      />
    </div>
  );
};

export default TextItem;
