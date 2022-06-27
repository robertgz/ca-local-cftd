
import { useQuery } from '@apollo/client';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { GET_COMMITTEE_CONTRIBUTIONS } from '../../GraphQL/GetCommitteeContributorsQuery';

import { CommitteeNameProps } from '../../models/CommitteeNameProps.model';

export const CommitteeContributorsSummary: FunctionComponent<CommitteeNameProps> = (props: CommitteeNameProps) => { 
  const {committeeName} = props;
  
  const { loading, error, data } = useQuery(GET_COMMITTEE_CONTRIBUTIONS, {
    variables: { committeeName },
  });

  if (loading || error || !data?.committee) return <div></div>;

  const { average, count } = data.committee.contributions;

  return( 
    <React.Fragment>
      <div style={styles.donorsElement}>
        <div style={styles.donorsTitle}>Donors</div>
        <div>{count}</div>
      </div>
      {/* <div style={styles.donorsDivider}>&nbsp;</div> */}
      <div style={styles.donorsElement}>
        <div style={styles.donorsTitle}>Average Donation</div>
        <div>${average}</div>
      </div>
    </React.Fragment>
  );
}


export interface StylesDictionary{
  [Key: string]: React.CSSProperties;
}

const DashBoardBlue = '#16375D';

const styles: StylesDictionary = {
  donorsElement: {
    display: 'flex',
    flex: '0 0 50%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  donorsTitle: {
    fontSize: '1em',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  donorsDivider: {
    width: '3px',
    backgroundColor: DashBoardBlue,
  },
};
