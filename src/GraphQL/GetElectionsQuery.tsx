import { gql } from "@apollo/client";

export const GET_ELECTIONS = gql`
  query elections($filters: ElectionFilters) {
    elections(filters: $filters) {
      id
      name
      year
      agencyId
    }
  }
`;
