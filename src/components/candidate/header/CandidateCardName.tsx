import * as React from 'react';
import { FunctionComponent, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CANDIDATE_INFO } from '../../../GraphQL/GetCandidateInfoQuery';
import { CandidateContext } from '../../../context/state';

export const CandidateCardName: FunctionComponent = () => {

  const DefaultName = <div style={styles.name} >Candidate Name</div>;
  
  const { id: candidateId } = useContext(CandidateContext);

  const { loading, error, data } = useQuery(GET_CANDIDATE_INFO, {
    variables: { candidateId },
  });

  if (loading || error || !data?.candidate) return DefaultName;
  
  const { fullName } = data.candidate;
  
  return( <div style={styles.name} >{ fullName }</div> );
}


export interface StylesDictionary{
  [Key: string]: React.CSSProperties;
}

const styles: StylesDictionary = {
  name: {
    fontSize: '1.5em',
  },
};
