
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';

import { CandidateIDProps } from '../models/CandidateIDProps.model';
import { GET_CANDIDATE_INFO } from '../../GraphQL/GetCandidateInfoQuery';
import { CommitteeRaisedSpentBar } from './CommitteeRaisedSpentBar';
import { CommitteeContributorsSummary } from './CommitteeContributorsSummary';
import { Link } from '@mui/material';

export const CandidateCardCommittee: FunctionComponent<CandidateIDProps> = (props: CandidateIDProps) => { 
  const {candidateId} = props;
  const { loading, error, data } = useQuery(GET_CANDIDATE_INFO, {
    variables: { candidateId },
  });

  if (loading || error || !data?.candidate) return <React.Fragment />;
  const { committeeName } = data.candidate;

  
  return(
    <React.Fragment>
      <div style={styles.donorsSummary}>
        <CommitteeContributorsSummary committeeName={committeeName} />
      </div>
      <div style={styles.raisedSpentChart}>
        <CommitteeRaisedSpentBar committeeName={committeeName} />
      </div>
      <div style={styles.viewCommitteeSelection}>
        {/* <Link href="#" >View Finances for Committee:<br /> {committeeName}</Link> */}
        View Finances for Committee:<br /> <Link href="#" >{committeeName}</Link>
      </div>
    </React.Fragment>
  );
}

export interface StylesDictionary{
  [Key: string]: React.CSSProperties;
}

const styles: StylesDictionary = {
  donorsSummary: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
  },
  raisedSpentChart: {
  },
  viewCommitteeSelection: {
    // display: 'flex',
    // flexDirection: 'row',
    padding: '15px',
    justifyContent: 'center',
  },
  committeeButton: {
  },
  committeeName: {
    fontSize: '.8em',
  },
};
