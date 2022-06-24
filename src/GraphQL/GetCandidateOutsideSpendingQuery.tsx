
import { gql } from "@apollo/client";

export const GET_CANDIDATE_OUTSIDE_SPENDING= gql`
  query outsideSpending ($candidateId: String!) {
    candidate(id: $candidateId) {
      id
      outsideSpending: independentExpenditures {
        candidateName
        electionYear
        sums {
          support
          oppose
        }
      }
    }
  }
`;
