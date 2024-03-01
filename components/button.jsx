
import styles from '@/styles/components/button.module.css';

export default function Button({ domain, children }) {

  function buyHandler(domain) {
    fetch('api/winkelwagen', {
      method: 'POST',
      body: JSON.stringify({ domain: domain}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <button onClick={() => buyHandler(domain)} className={styles.button}>{children}</button>
  );
}
