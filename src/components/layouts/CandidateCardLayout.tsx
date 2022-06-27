import { useContext, useEffect } from 'react';

import { CandidateCardHeader } from '../candidate/header/CandidateCardHeader';
import { CandidateIDProps } from '../../models/CandidateIDProps.model';
import { CandidateCardCommittee } from '../committee/CandidateCardCommittee';
import { CandidateCardOutsideSpendingCommittees } from '../outsideCommittee/CandidateCardOutsideSpendingCommittees';
import { CandidateContext } from '../../context/state';

export default function CandidateCardLayout(props: CandidateIDProps){

  const {candidateId} = props;
  const { setID } = useContext(CandidateContext);

  useEffect(() => {
    setID(candidateId)
  });

  return (
    <div>
      <div style={styles.outerContainer} className="CandidateCard" >
        <CandidateCardHeader/>

        <div style={styles.committeeFinancesSection}>
          <div>
            <span style={styles.sectionHeader}>
              Candidate Committee Finances
            </span>
          </div>
          <CandidateCardCommittee/>
        </div>

        <div style={styles.outsideCommitteeSection}>
          <div>
            <span style={styles.sectionHeader}>
              Outside Money Spent for Candidate by other Committees
            </span>
            <CandidateCardOutsideSpendingCommittees/>
          </div>
        </div>

      </div>
    </div>
  );
}


interface StylesDictionary{
  [Key: string]: React.CSSProperties;
}

const DashBoardBlue = '#16375D';

const styles: StylesDictionary = {
  outerContainer: {
    minHeight: '400px',
    width: '360px',
    backgroundColor: '#f8f9fa',
    borderStyle: 'solid',
  },
  sectionHeader: {
    fontSize: '0.8em',
    color: 'white',
    backgroundColor: DashBoardBlue,
    padding: '5px',
  },
  committeeFinancesSection: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: `2px solid ${DashBoardBlue}`,
  },
  outsideCommitteeSection: {
    display: 'flex',
    flexDirection: 'column',
  },
};
