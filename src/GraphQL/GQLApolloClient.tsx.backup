import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const ENV_API = process.env.REACT_APP_API;

let host = process.env.REACT_APP_PRODUCTION_API_URL;
if (ENV_API === 'local') {
  host = process.env.REACT_APP_LOCAL_API_URL;
} else if (ENV_API === 'staging') {
  host = process.env.REACT_APP_STAGING_API_URL;
}

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
