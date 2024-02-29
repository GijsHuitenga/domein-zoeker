
import { addToCart } from '@/redux/winkelwagen.slice';

import { useDispatch } from 'react-redux';

export default function TableRow({ domain }) {

  const dispatch = useDispatch();

  return (
    <tr key={domain.domain}>
      <th>{domain.domain}</th>
      <th>{domain.status}</th>
      <th>&euro;{domain.price}</th>
      <th><button onClick={() => dispatch(addToCart(domain))}>Kopen</button></th>
    </tr>
  );
}
