import styles from './TextList.module.scss';
import TextItem from '../TextItem/TextItem';

const TextList: React.FC<TextListProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      {text.map((text, index) => (
        <TextItem key={index} text={text} />
      ))}
    </div>
  );
};

export default TextList;
