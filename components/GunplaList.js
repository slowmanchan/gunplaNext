import { gql, useQuery, NetworkStatus } from '@apollo/client'

export const ALL_GUNPLAS_QUERY = gql`
  query {
    gunplas{
      id,
      title,
      subtitle,
      classification,
      lineupNo,
      scale,
      franchise,
      releaseDate,
      janIsbn,
      run,
      price
    }
  }
`

export default function GunplaList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(ALL_GUNPLAS_QUERY)  
  if (loading) return <div>Loading</div>

  const { gunplas } = data
  return (
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Subtitle</td>
        </tr>
      </thead>
      <tbody>
      {gunplas.map((gunpla, index) => (
      <tr key={gunpla.id}>
        <td>{gunpla.title}</td>
        <td>{gunpla.subtitle}</td>
        <td>{gunpla.classification}</td>
        <td>{gunpla.lineupNo}</td>
        <td>{gunpla.scale}</td>
        <td>{gunpla.franchise}</td>
        <td>{gunpla.releaseDate}</td>
        <td>{gunpla.janIsbn}</td>
        <td>{gunpla.run}</td>
        <td>{gunpla.price}</td>
      </tr>
      ))}
      </tbody>
    </table>
  )
}