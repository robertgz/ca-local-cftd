// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const cacheOptions = {
  typePolicies: {
    Committee: {
      keyFields: ["name"],
    },
    Office: {
      keyFields: ["title", "electionYear"],
    },
    ContributionDetails: {
      merge: true,
    },
  }
};

const HOST =  process.env.NEXT_PUBLIC_API_URL;

const client = new ApolloClient({
    uri: `${HOST}/graphql`,
    cache: new InMemoryCache(cacheOptions),
});

export default client;