
import styles from '@/styles/components/button.module.css';

export default function Button({children }) {
  return (
    <button className={styles.button}>{children}</button>
  );
}
