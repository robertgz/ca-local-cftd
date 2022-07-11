// ./apollo-client.js

import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";

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
const SECOND_HOST =  process.env.NEXT_PUBLIC_NEXT_API_URL;
// https://www.loudnoises.us/next-js-two-apollo-clients-two-graphql-data-sources-the-easy-way/

const firstLink = new HttpLink({
  uri: `${HOST}/graphql`,
});

const secondLink = new HttpLink({
  uri: `${SECOND_HOST}/api/graphql`,
});

const thirdLink = new HttpLink({
  uri: `${SECOND_HOST}/api/graphql-yoga`,
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const otherLinks = ApolloLink.split(
  operation => operation.getContext().clientName === "third",
  thirdLink,
  firstLink
);

const client = new ApolloClient({
    // uri: `${HOST}/graphql`,
    link: ApolloLink.split(
      operation => operation.getContext().clientName === "second",
      secondLink,
      // firstLink,
      otherLinks,
    ),
    cache: new InMemoryCache(cacheOptions),
    defaultOptions: defaultOptions,
});

export default client;