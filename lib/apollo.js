import { withApollo } from "next-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckdb531gn4tu501z8cx2788ol/master",
  cache: new InMemoryCache()
});

export default withApollo(apolloClient);