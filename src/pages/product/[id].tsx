import { useRouter } from 'next/router'

export default function product() {
  const { query } = useRouter()

  return (
    <h1>product: {JSON.stringify(query.id)}</h1>
  )
}
