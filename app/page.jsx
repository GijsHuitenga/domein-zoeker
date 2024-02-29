
import Button from '@/components/button';
import Table from '@/components/table';

import styles from '@/styles/page.module.css';

export default async function Home() {

  const data = await getData();

  console.log(data);

  return (
    <main className={styles.main}>
      <h3>Domein zoeken</h3>
      <form>
        <Button>Zoeken</Button>
        <input 
          type='text' 
          id='search' 
          name='search' 
          placeholder='Is jouw domain nog vrij?' 
          className={styles.search} 
        />
      </form>
      <hr />
      <Table>
        {/* {data.map(domain => (
          <tr key={domain.domain}>
            <th>{domain.domain}</th>
            <th>{domain.status}</th>
            <th>&euro;{domain.price}</th>
            <th><Button>Kopen</Button></th>
          </tr>
        ))} */}
      </Table>
    </main>
  );
}

async function getData() {

  // const req = [
  //   {
  //     "name": "example",
  //     "extension": "com"
  //   },
  //   {
  //     "name": "example",
  //     "extension": "nl"
  //   }
  // ];

  const res = await fetch('https://dev.api.mintycloud.nl/api/v2', {
    method: 'post',
    headers: {
      'Authorization': 'Basic f36a4c78c8b7f3782183cda40717f1d8e7d1981909fdd4c87c14e227548e11ed',
      'Content-Type': 'application/json'
    }
  });

  // if (!res.ok) {
  //   throw new Error('Failed to fetch domains');
  // }

  return res.json();

}
