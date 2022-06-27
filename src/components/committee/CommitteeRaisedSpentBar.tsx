
import { useQuery } from '@apollo/client';
import { FunctionComponent } from 'react';

import { GET_COMMITTEE_CONTRIBUTIONS_EXPENSES_SUM } from '../../GraphQL/GetCommitteeRaisedSpentQuery';
import { CommitteeNameProps } from '../../models/CommitteeNameProps.model';
import { RaisedSpendBarChart } from '../charts/RaisedSpendBarChart';

export const CommitteeRaisedSpentBar: FunctionComponent<CommitteeNameProps> = (props: CommitteeNameProps) => {

  const {committeeName} = props;

  const { loading, error, data } = useQuery(GET_COMMITTEE_CONTRIBUTIONS_EXPENSES_SUM, {
    variables: { committeeName },
  });

  if (loading || error || !data?.committee) return <div></div>;

  const { sum: raised } = data.committee.contributions;
  const { sum: spent } = data.committee.expenses;

  return (<RaisedSpendBarChart raised={raised} spent={spent} />);
}