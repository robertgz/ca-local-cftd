import { gql } from "@apollo/client";

export const GET_YEARS = gql`
  query electionYears($filters: ElectionYearFilters) {
    electionYears(filters: $filters) {
      year
    }
  }
`;
