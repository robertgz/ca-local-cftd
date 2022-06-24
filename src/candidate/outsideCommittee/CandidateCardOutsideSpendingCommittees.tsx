
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { List } from '@mui/material';

import { CandidateIDProps } from '../models/CandidateIDProps.model';

// import { OutsideSpendingCommittee } from '../models/OutsideSpendingCommittee';
import { OutsideSpendingBarChart } from '../charts/OutsideSpendingBarChart';
import { CommitteeList } from './CommitteeList';
import { GET_CANDIDATE_OUTSIDE_SPENDING_COMMITTEES } from '../../GraphQL/GetCandidateOutsideSpendingCommitteesQuery';

export const CandidateCardOutsideSpendingCommittees: FunctionComponent<CandidateIDProps> = (props: CandidateIDProps) => { 
  const {candidateId} = props;

  const { loading, error, data } = useQuery(GET_CANDIDATE_OUTSIDE_SPENDING_COMMITTEES, {
    variables: { candidateId },
  });

  if (loading || error || !data?.candidate?.outsideSpendingCommittees) return <React.Fragment />;

  let { support: supportCommittees, oppose: opposedCommittees } = data.candidate.outsideSpendingCommittees.committees;

  supportCommittees = transformCommittees(supportCommittees);
  opposedCommittees = transformCommittees(opposedCommittees);

  if (supportCommittees.length < 1 && opposedCommittees.length <1) 
    return (<div style={styles.noSpending}>No Outside Spending for Candidate</div>)

  // should a label be included with 'Outside Spending with with "last" 
  // and within two years of "year"' 
  // Outside Money spent between year-2 and year
  // Example: Outside Money spent between 2020 and 2022
  return(
    <React.Fragment>
      <OutsideSpendingBarChart 
        opposedCommittees={opposedCommittees}
        supportCommittees={supportCommittees} 
      />
      <List component="nav" aria-label="main mailbox folders">
        {opposedCommittees.length > 0 && <CommitteeList 
          committees={opposedCommittees}
          itemText="Spending to Oppose Candidate"
        />}
        {supportCommittees.length > 0 && <CommitteeList 
          committees={supportCommittees}
          itemText="Spending to Support Candidate"
        />}
      </List>
    </React.Fragment>
  );
}

function transformCommittees(committees: any[]) {
  return committees.map((committee) => ({
    id: committee.committee.id,
    name: committee.committee.name,
    sum: committee.sum,
  }));
}

export interface StylesDictionary{
  [Key: string]: React.CSSProperties;
}

const styles: StylesDictionary = {
  noSpending: {
    padding: '15px',
    // fontSize: '1.2em'
  }
};
