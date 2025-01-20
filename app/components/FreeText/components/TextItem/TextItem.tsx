import styles from './TextItem.module.scss';

const TextItem: React.FC<TextProps> = ({ text }) => {
  return <li className={styles.container}>{text}</li>;
};

export default TextItem;
