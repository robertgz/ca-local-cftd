import { gql } from "@apollo/client";

export interface RaisedVsSpent {
  committee: {
    contributions: {
      sum: number;
    };
    expenses: {
      sum: number;
    };
  };
}

export const GET_COMMITTEE_CONTRIBUTIONS_EXPENSES_SUM = gql`
    query committeeContributionsExpensesSum2 ($committeeName: String!) {
      committee(committeeName: $committeeName) {
        name
        contributions {
          sum
        }
        expenses {
          sum
        }
      }
  }
`;

