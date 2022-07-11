
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo-client";
import CandidatesAppBar from "../src/components/candidates/CandidatesAppBar";

function Candidates() {
  return (
    <ApolloProvider client={client}>
      <CandidatesAppBar />
    </ApolloProvider>
  );
}

export default Candidates;
