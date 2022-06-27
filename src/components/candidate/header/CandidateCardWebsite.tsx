
import * as React from 'react';
import { FunctionComponent, useContext } from 'react';
import { Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

import { useQuery } from '@apollo/client';
import { GET_CANDIDATE_INFO } from '../../../GraphQL/GetCandidateInfoQuery';
import { CandidateContext } from '../../../context/state';

export const CandidateCardWebsite: FunctionComponent = () => {
  const DefaultName = <React.Fragment />;

  const { id: candidateId } = useContext(CandidateContext);

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
