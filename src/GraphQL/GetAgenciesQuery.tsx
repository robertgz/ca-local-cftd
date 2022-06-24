import { gql } from "@apollo/client";

export const GET_AGENCIES = gql`
  query agencies {
    agencies {
      id
      shortcut
      name
    }
  }
`;
