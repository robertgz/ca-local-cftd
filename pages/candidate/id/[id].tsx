
import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../_app";
import { CandidateContextLayout } from "../../../src/components/layouts/CandidateContextLayout";
import CandidateCardLayout from "../../../src/components/layouts/CandidateCardLayout";
import client from "../../../apollo-client";

const Candidate: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  // const candidateId = Array.isArray(id) ? id[0] : id;
  const candidateId =  id;

  if (!candidateId || Array.isArray(candidateId)) return (<></>)

  return (
    <ApolloProvider client={client}>
      <CandidateCardLayout  candidateId={candidateId}/>
    </ApolloProvider>
  );
}

Candidate.getLayout = function getLayout(page: ReactElement) {
  return (
    <CandidateContextLayout>
      {<Candidate/>}
    </CandidateContextLayout>
  );
}

export default Candidate
