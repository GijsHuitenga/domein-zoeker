"use client";

import Table from '@/components/table';
import TableRow from '@/components/table-row';
import { getTLDPrices } from '@/services/domain';

import styles from '@/styles/page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {

  const [tlds, setTlds] = useState([]);
  const [query, setQuery] = useState('');
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {

    (async () => {
      setIsFetching(true);
      const prices = await getTLDPrices('example');
      setIsFetching(false);

      if(prices) {
        //! check de data in je browser console
        console.log(prices);
        setTlds(prices);
      } else {
        throw new Error('Failed to fetch domains');
      }
    })()
  }, [])

  const searchFilter = (array) => {
    return array.filter(
      (el) => el.domain.toLowerCase().includes(query)
    );
  };

  const searchChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const filtered = searchFilter(tlds);

  return (
    <main className={styles.main}>
      <h3>Domein zoeken</h3>
      <form>
        <input 
          type='text' 
          id='search' 
          name='search' 
          onChange={searchChangeHandler}
          placeholder='Is jouw domain nog vrij?' 
          className={styles.search} 
        />
      </form>
      <hr />
      <Table>
        {
          !isFetching && query == '' ? tlds.map(domain => (
            <TableRow domain={domain} />
          )) : filtered.map(domain => (
            <TableRow domain={domain} />
          ))
        }
      </Table>
      {
        isFetching && 
        <div className={styles.loading}>
          <p>Loading domains...</p>
        </div>
      }
    </main>
  );
}
