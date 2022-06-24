
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CANDIDATE_INFO } from '../../GraphQL/GetCandidateInfoQuery';
import { CandidateIDProps } from '../models/CandidateIDProps.model';

export const CandidateCardDescription: FunctionComponent<CandidateIDProps> = (props: CandidateIDProps) => {

  const DefaultName = <div style={styles.description} >Description / Job Title of Candidate Campaigning for Office</div>;
  
  const {candidateId} = props;
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
