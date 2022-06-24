
import { FunctionComponent } from 'react';

import { CandidateIDProps } from '../models/CandidateIDProps.model';
import { CandidateCardImage } from './CandidateCardImage';
import { CandidateCardName } from './CandidateCardName';
import { CandidateCardDescription } from './CandidateCardDescription';
import { CandidateCardWebsite } from './CandidateCardWebsite';

export const CandidateCardHeader:  FunctionComponent<CandidateIDProps> = (props: CandidateIDProps) => {

  const {candidateId} = props;

  return (
    <div>
      <div style={styles.headerSection} >
        <CandidateCardImage candidateId={candidateId}/>
        <div style={styles.textContainer}>
          <CandidateCardName candidateId={candidateId} />
          <CandidateCardDescription candidateId={candidateId} />  
          <CandidateCardWebsite candidateId={candidateId} />  
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
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '.5em 0',
    borderBottom: `2px solid ${DashBoardBlue}`,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    padding: '10px',
  },
};
