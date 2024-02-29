
import Link from 'next/link';

import styles from '@/styles/layout/header.module.css';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href='/' className={styles.brand}>Next.js</Link>
        <section className={styles.links}>
          <Link href='/'>Domein zoeken</Link>
          <Link href='/winkelwagen'>Winkelwagen</Link>
          <Link href='/bestellingen'>Bestellingen</Link>
        </section>
      </div>
    </nav>
  );
}
