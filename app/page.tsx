import FreeText from './components/FreeText/FreeText';
import styles from './page.module.css';


export default function Home() {
  return (
    <div className={styles.page}>
      <FreeText/>
    </div>
  );
}
