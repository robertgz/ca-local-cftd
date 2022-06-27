
import * as React from 'react';
import { FunctionComponent, useContext } from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_CANDIDATE_INFO } from '../../../GraphQL/GetCandidateInfoQuery';
import { CandidateContext } from '../../../context/state';

const HOST = process.env.NEXT_PUBLIC_API_URL;

export const CandidateCardImage: FunctionComponent = () => {
  const defaultProfileImage = '/profile.png';
  const defaultAltText = 'default candidate"';
  const imageSize = 125;

  const { id: candidateId } = useContext(CandidateContext);

 
  const { loading, error, data } = useQuery(GET_CANDIDATE_INFO, {
    variables: { candidateId },
  });
  
  let imagePath = defaultProfileImage;
  let altText = defaultAltText;

  const useDefault = loading || error || !data?.candidate;

  if (!useDefault) {
    const { imageUrl, fullName } = data.candidate;
    altText = fullName;
    imagePath = imageUrl ? `${HOST}/${imageUrl}` : defaultProfileImage;
  }

  return( 
    <div style={styles.container}>
      <Image style={styles.image} src={imagePath} alt={altText} width={imageSize} height={imageSize}  />
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
    // objectFit: 'cover',
    // objectPosition: 'center top',
    // width: '100%',
    // height: 'auto',
    borderRadius: '50%',
  },
};
