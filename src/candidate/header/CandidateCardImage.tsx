
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CANDIDATE_INFO } from '../../GraphQL/GetCandidateInfoQuery';
import { CandidateIDProps } from '../models/CandidateIDProps.model';
import profile from './profile.png';

export const CandidateCardImage: FunctionComponent<CandidateIDProps> = (props: CandidateIDProps) => {

  const defaultCardImage = <img style={styles.image} src={profile} alt="default candidate"></img>;
  const defaultElement = <div style={styles.container}>{defaultCardImage}</div>
  
  const {candidateId} = props; 
  const { loading, error, data } = useQuery(GET_CANDIDATE_INFO, {
    variables: { candidateId },
  });

  if (loading || error || !data?.candidate) return defaultElement;
  
  const { imageUrl, fullName } = data.candidate;
  const imagePath = imageUrl ? `${process.env.REACT_APP_API_URL}/${imageUrl}` : profile;
  
  return( 
    <div style={styles.container}>
      <img style={styles.image} src={imagePath} alt={fullName} />
    </div>
  );
}


export interface StylesDictionary{
  [Key: string]: React.CSSProperties;
}

const styles: StylesDictionary = {
  container: {
    display: 'flex',
    height: '125px',
    width: '125px',
    flexShrink: '0',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  image: {
    objectFit: 'cover',
    objectPosition: 'center top',
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
};
