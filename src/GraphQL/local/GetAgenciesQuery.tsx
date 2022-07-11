import { gql } from "@apollo/client";

export interface Agency {
  id: string;
  name: string;
  software: string;
}

export const GET_AGENCIES = gql`
  query agencies {
    agencies {
      id
      name
      software
    }
  }
`;
