import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return <h1>product: {JSON.stringify(query.id)}</h1>;
}
