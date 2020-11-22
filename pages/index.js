import { initializeApollo, addApolloState } from '../lib/apolloClient'
import GunplaList, { ALL_GUNPLAS_QUERY } from '../components/GunplaList'

const Home = () => (
    <GunplaList />      
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_GUNPLAS_QUERY,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}

export default Home