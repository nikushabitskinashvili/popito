import GenreDropDown from "./components/GenreDropDown/GenreDropDown";
import styles from "./page.module.css";

export default function Home() {
  return <div className={styles.page}>
    <GenreDropDown></GenreDropDown>
  </div>;
}
