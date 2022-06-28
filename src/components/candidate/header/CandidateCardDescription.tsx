
import * as React from 'react';
import { FunctionComponent, useContext  } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CANDIDATE_INFO } from '../../../GraphQL/GetCandidateInfoQuery';
import { CandidateContext } from '../../../context/state';
import styles from './CandidateCardDescription.module.css';

export const CandidateCardDescription: FunctionComponent = () => {

  const DefaultName = <div className={styles.description} >Description / Job Title of Candidate Campaigning for Office</div>;
  
  const { id: candidateId } = useContext(CandidateContext);

  const { loading, error, data } = useQuery(GET_CANDIDATE_INFO, {
    variables: { candidateId },
  });

  if (loading || error || !data?.candidate) return DefaultName;
  
  const { description } = data.candidate;
  
  return( <div className={styles.description} >{ description }</div> );
}
