import { gql } from "@apollo/client";

// export interface CommitteeContributions {
//   committee: {
//     contributions: {
//       sum: number;
//       average: number;
//     };
//   };
// }

export const GET_COMMITTEE_CONTRIBUTIONS = gql`
    query committeeContributionsExpensesSum ($committeeName: String!) {
      committee(committeeName: $committeeName) {
        name
        contributions {
          average
          count
        }
      }
  }
`;

