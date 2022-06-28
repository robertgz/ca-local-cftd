import { useContext, useEffect } from 'react';

import { CandidateCardHeader } from '../candidate/header/CandidateCardHeader';
import { CandidateIDProps } from '../../models/CandidateIDProps.model';
import { CandidateCardCommittee } from '../committee/CandidateCardCommittee';
import { CandidateCardOutsideSpendingCommittees } from '../outsideCommittee/CandidateCardOutsideSpendingCommittees';
import { CandidateContext } from '../../context/state';
import styles from './CandidateCardLayout.module.css';

export default function CandidateCardLayout(props: CandidateIDProps){

  const {candidateId} = props;
  const { setID } = useContext(CandidateContext);

  useEffect(() => {
    setID(candidateId)
  });

  return (
    <div>
      <div className={styles.outerContainer} >
        <CandidateCardHeader/>

        <div className={styles.committeeFinancesSection}>
          <div>
            <span className={styles.sectionHeader}>
              Candidate Committee Finances
            </span>
          </div>
          <CandidateCardCommittee/>
        </div>

        <div className={styles.outsideCommitteeSection}>
          <div>
            <span className={styles.sectionHeader}>
              Outside Money Spent for Candidate by other Committees
            </span>
            <CandidateCardOutsideSpendingCommittees/>
          </div>
        </div>

      </div>
    </div>
  );
}
