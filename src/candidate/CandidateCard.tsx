import { FunctionComponent } from 'react';

import { CandidateCardHeader } from './header/CandidateCardHeader';
import { CandidateIDProps } from './models/CandidateIDProps.model';
import { CandidateCardCommittee } from './committee/CandidateCardCommittee';
import { CandidateCardOutsideSpendingCommittees } from './outsideCommittee/CandidateCardOutsideSpendingCommittees';

export const CandidateCard: FunctionComponent<CandidateIDProps> = (props: CandidateIDProps) => {

  const {candidateId} = props;

  return (
    <div>
      <div style={styles.outerContainer} className="CandidateCard" >
        <CandidateCardHeader candidateId={candidateId} />

        <div style={styles.committeeFinancesSection}>
          <div>
            <span style={styles.sectionHeader}>
              Candidate Committee Finances
            </span>
          </div>
          <CandidateCardCommittee candidateId={candidateId} />
        </div>

        <div style={styles.outsideCommitteeSection}>
          <div>
            <span style={styles.sectionHeader}>
              Outside Money Spent for Candidate by other Committees
            </span>
            <CandidateCardOutsideSpendingCommittees candidateId={candidateId} />
          </div>
        </div>

      </div>
    </div>
  );
}


export interface StylesDictionary{
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
