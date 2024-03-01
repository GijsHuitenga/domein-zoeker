
"use client"

import Table from '@/components/table';
import TableRow from '@/components/winkelwagen/table-row';
import Button from '@/components/winkelwagen/button';
import styles from '@/styles/winkelwagen/page.module.css';
import { useEffect, useState } from 'react';

export default function Winkelwagen() {

  const [cart, setCart] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [price, setPrice] = useState(0.00);

  useEffect(() => {
    setIsFetching(true);
    fetch('api/winkelwagen', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
    setIsFetching(false);
  }, []);

  // console.log(cart);

  useEffect(() => {
    let productPrices = 0;
    cart.map(domain => {
      const domainPrice = domain.price;
      productPrices += domainPrice;
      setPrice(productPrices);
    });
  }, [cart]);

  const totalPrices = price * 1.21;
  const btw = totalPrices - price;

  return (
    <main className={styles.main}>
      <section className={styles.winkelwagen}>
        <h3>Winkelwagen</h3>
        <hr />
        <Table>
          {
            !isFetching && cart.map(domain => (
              <TableRow key={domain.domain} domain={domain} />
            ))
          }
        </Table>
        {
          isFetching && 
          <div className={styles.loading}>
            <p>Loading domains...</p>
          </div>
        }
      </section>
      <section className={styles.overzicht}>
        <h3>Overzicht</h3>
        <hr />
        <div className={styles.producten}>
          <p>Producten</p>
          <p>&euro;{price.toFixed(2)}</p>
        </div>
        <div className={styles.totaal}>
          <p>Totaal <br />(inclusief &euro;{btw.toFixed(2)} BTW)</p>
          <p>&euro;{totalPrices.toFixed(2)}</p>
        </div>
        <Button>Go to checkout</Button>
      </section>
    </main>
  );
}
