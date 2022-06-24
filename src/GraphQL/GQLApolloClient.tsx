import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const APP_ENV = process.env.REACT_APP_ENVIRONMENT;
const host = APP_ENV === 'local' 
  ? process.env.REACT_APP_LOCAL_API_URL
  : (APP_ENV === 'staging' 
    ? process.env.REACT_APP_STAGING_API_URL 
    : process.env.REACT_APP_PRODUCTION_API_URL
    );

const uri = `${host}/graphql`;

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


export const GQLApolloClient = (props: any) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(cacheOptions),
    uri: uri,
  });

  return (
    <div>
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    </div>
  );
}
