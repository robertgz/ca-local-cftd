
import { gql } from "@apollo/client";

export const GET_CANDIDATE_OUTSIDE_SPENDING_COMMITTEES = gql`
  query outsideSpending ($candidateId: String!) {
    candidate(id: $candidateId) {
      id
      outsideSpendingCommittees: independentExpenditures {
        candidateName
        electionYear
        committees {
          support {
            sum
            committee {
              id
              name
              dashedName
            }
          }
          oppose {
            sum
            committee {
              id
              name
              dashedName
            }
          }
        }
      }
    }
  }
`;
