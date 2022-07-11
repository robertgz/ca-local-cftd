import { gql } from "@apollo/client";

export const GET_TEMP = gql`
    query getProducts {
      products { 
        id
        name
      }
    }
`;
