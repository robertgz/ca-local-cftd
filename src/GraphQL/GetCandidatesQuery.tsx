import { gql } from "@apollo/client";

export const GET_CANDIDATES = gql`
  query candidates($filters: CandidateFilters) {
    candidates(filters: $filters) {
      id
      fullName
    }
  }
`;
