
import Button from "./button";

export default function TableRow({ domain }) {
  return (
    <tr key={domain.domain}>
      <th>{domain.domain}</th>
      <th>{domain.status}</th>
      <th>&euro;{domain.price}</th>
      <th><Button>Kopen</Button></th>
    </tr>
  );
}
