import styles from './TextList.module.scss';
import TextItem from '../TextItem/TextItem';

const TextList: React.FC<TextListProps & { onDelete: (index: number) => void }> = ({ text, onDelete }) => {
  return (
    <div className={styles.container}>
      {text.map((item, index) => (
        <TextItem key={index} text={item} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TextList;
