
import Button from '@/components/button';
import styles from '@/styles/winkelwagen/page.module.css';

export default function Winkelwagen() {
  return (
    <main className={styles.main}>
      <section className={styles.winkelwagen}>
        <h3>Winkelwagen</h3>
        <hr />

      </section>
      <section className={styles.overzicht}>
        <h3>Overzicht</h3>
        <hr />
        <div className={styles.producten}>
          <p>Producten</p>
          <p>&euro;XX.XX</p>
        </div>
        <div className={styles.totaal}>
          <p>Totaal <br />(inclusief &euro;XX.XX BTW)</p>
          <p>&euro;XX.XX</p>
        </div>
        <Button>Go to checkout</Button>
      </section>
    </main>
  );
}
