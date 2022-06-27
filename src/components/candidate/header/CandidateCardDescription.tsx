
import * as React from 'react';
import { FunctionComponent, useContext  } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CANDIDATE_INFO } from '../../../GraphQL/GetCandidateInfoQuery';
import { CandidateContext } from '../../../context/state';

export const CandidateCardDescription: FunctionComponent = () => {

  const DefaultName = <div style={styles.description} >Description / Job Title of Candidate Campaigning for Office</div>;
  
  const { id: candidateId } = useContext(CandidateContext);

  const { loading, error, data } = useQuery(GET_CANDIDATE_INFO, {
    variables: { candidateId },
  });

  if (loading || error || !data?.candidate) return DefaultName;
  
  const { description } = data.candidate;
  
  return( <div style={styles.description} >{ description }</div> );
}


export interface StylesDictionary{
  [Key: string]: React.CSSProperties;
}

const styles: StylesDictionary = {
  description: {
    hyphens: 'auto',
    fontSize: '0.9em',
  },
};
