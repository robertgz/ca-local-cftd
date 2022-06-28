
import { FunctionComponent } from 'react';

import { CandidateCardImage } from './CandidateCardImage';
import { CandidateCardName } from './CandidateCardName';
import { CandidateCardDescription } from './CandidateCardDescription';
import { CandidateCardWebsite } from './CandidateCardWebsite';
import styles from './CandidateCardHeader.module.css';

export const CandidateCardHeader: FunctionComponent = () => {

  return (
    <div>
      <div className={styles.headerSection} >
        <CandidateCardImage/>
        <div className={styles.textContainer}>
          <CandidateCardName/>
          <CandidateCardDescription/>  
          <CandidateCardWebsite/>  
        </div>
      </div>
    </div>
  );
}
