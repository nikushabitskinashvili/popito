import styles from './UserList.module.scss';
import InsideTabs from './components/InsideTabs/InsideTabs';
const UserList = () => {
  return (
    <div className={styles.container}>
      <span>My List</span>
      <InsideTabs />
    </div>
  );
};

export default UserList
