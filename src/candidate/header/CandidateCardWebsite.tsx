
import * as React from 'react';
import { FunctionComponent } from 'react';
import { Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

import { useQuery } from '@apollo/client';
import { GET_CANDIDATE_INFO } from '../../GraphQL/GetCandidateInfoQuery';
import { CandidateIDProps } from '../models/CandidateIDProps.model';

export const CandidateCardWebsite: FunctionComponent<CandidateIDProps> = (props: CandidateIDProps) => {

  const DefaultName = <React.Fragment />;
  
  const {candidateId} = props;
  const { loading, error, data } = useQuery(GET_CANDIDATE_INFO, {
    variables: { candidateId },
  });

  if (loading || error || !data?.candidate) return DefaultName;
  
  const { fullName, website } = data.candidate;
  
  return (
    <Link href={website} style={styles.link} >
      <LinkIcon style={styles.linkIcon} />Website for: {fullName}
    </Link>
  )
}


export interface StylesDictionary{
  [Key: string]: React.CSSProperties;
}

const styles: StylesDictionary = {
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  linkIcon: {
    paddingRight: '5px',
  },
};
