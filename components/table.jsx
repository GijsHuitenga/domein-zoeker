
import styles from '@/styles/components/table.module.css';

export default function Table({ children }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope='col'>Domain</th>
          <th scope='col'>Status</th>
          <th scope='col'>Prijs</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}
